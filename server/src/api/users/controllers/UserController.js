import jwt from 'jsonwebtoken';
import capitalize from 'lodash.capitalize';

class UserController {
	#model;

	constructor(model) {
		this.#model = model;
	}

	/**
	 * @desc Log in user & get token
	 * @route POST /users/login
	 * @access Public
	 */
	async logIn(req, res) {
		try {
			const { username, password } = req.body;
			const user = await this.#model.findOne({ username });

			if (user && (await user.matchPassword(password))) {
				this.#generateToken(res, user._id);
				this.#sendDetails(user, res, 'Logged in successfully');
			} else {
				errorResponse(res, 401, 'Invalid username or password');
			}
		} catch (error) {
			next(error);
		}
	}

	/**
	 * @desc Sign up a new user & get token
	 * @route POST /users/sign-up
	 * @access Public
	 */
	async signUp(req, res, next) {
		try {
			const { username, email, password } = req.body;

			const existingUser = await this.#model
				.findOne({
					$or: [{ username }, { email }]
				})
				.select('username email -_id');

			if (username === existingUser.username) {
				errorResponse(res, 400, 'Username is already taken');
			}

			if (email === existingUser.email) {
				errorResponse(res, 400, 'Email is already taken');
			}

			const user = await this.#model.create({
				username,
				email,
				password
			});

			if (user) {
				generateToken(res, user._id);
				this.#sendDetails(user, res, 'Signed up successfully', 201);
			} else {
				errorResponse(res, 400, 'Invalid user data');
			}
		} catch (error) {
			next(error);
		}
	}

	/**
	 * @desc Log out user & clear cookie
	 * @route POST /users/logout
	 * @access Public
	 */
	async logOut(req, res) {
		try {
			res.cookie('jwt', '', {
				httpOnly: true,
				expires: new Date(0)
			});

			res.json({ message: 'Logged out successfully' });
		} catch (error) {
			next(error);
		}
	}

	/**
	 * @desc Update user settings
	 * @route PUT /users/settings
	 * @access Private
	 */
	async updateSettings(req, res) {
		try {
			const user = await this.#model.findById(req.user._id);

			if (user) {
				const { username, email, password } = req.body;

				await this.#updateUniqueSetting(user, 'username', username, res);
				await this.#updateUniqueSetting(user, 'email', email, res);
				await this.#updatePassword(user, password, res);

				const updatedUser = await user.save();

				this.#sendDetails(updatedUser, res, 'Settings updated successfully');
			} else {
				errorResponse(res, 404, 'User not found');
			}
		} catch (error) {
			next(error);
		}
	}

	#generateToken(res, userId) {
		const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: '30d'
		});

		res.cookie('jwt', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
			maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
		});
	}

	#sendDetails(user, res, message, statusCode) {
		if (statusCode) {
			res.status(statusCode);
		}

		res.json({
			_id: user._id,
			username: user.username,
			email: user.email,
			message: message
		});
	}

	async #updateUniqueSetting(user, settingName, settingValue, res) {
		if (settingValue) {
			const settingExists = await this.#model.findOne({
				[settingName]: settingValue
			});

			if (settingExists) {
				const errorMessage = capitalize(settingName) + ' already in use';
				errorResponse(res, 400, errorMessage);
			}

			user[settingName] = settingValue;
		}
	}

	async #updatePassword(user, password, res) {
		if (password) {
			const isPasswordSame = await user.matchPassword(password);

			if (isPasswordSame) {
				errorResponse(
					res,
					400,
					'The new password must be different from the current password.'
				);
			}

			user.password = password;
		}
	}
}

function errorResponse(res, statusCode, message) {
	res.status(statusCode);

	throw new Error(message);
}

export default UserController;
