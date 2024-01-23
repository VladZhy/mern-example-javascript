import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import capitalize from 'lodash.capitalize';

const logInUser = asyncHandler(async (req, res) => {
	console.log(req.body);
	const { username, password } = req.body;

	const user = await User.findOne({ username }).select('+password');

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		sendUserDetails(user, res, 'Logged in successfully');
	} else {
		errorResponse(res, 401, 'Invalid username or password');
	}
});

// @desc    Sign up a new user
// @route   POST /sign-up
// @access  Public
const signUpUser = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	const userExists = await User.findOne({ $or: [{ username }, { email }] });

	if (userExists) {
		errorResponse(res, 400, 'User already exists');
	}

	const user = await User.create({
		username,
		email,
		password
	});

	if (user) {
		generateToken(res, user._id);
		sendUserDetails(user, res, 'Signed up successfully', 201);
	} else {
		errorResponse(res, 400, 'Invalid user data');
	}
});

// @desc    Log out user / clear cookie
// @route   POST /users/log-out
// @access  Public
const logOutUser = (req, res) => {
	res.cookie('jwt', '', {
		httpOnly: true,
		expires: new Date(0)
	});

	res.json({ message: 'Logged out successfully' });
};

// @desc    Update user settings
// @route   PUT /users/settings
// @access  Private
const updateUserSettings = asyncHandler(async (req, res) => {
	const user = await User.findById(req.body._id);

	if (user) {
		const { username, email, password } = req.body;

		await updateUniqueSetting(user, 'username', username, res);
		await updateUniqueSetting(user, 'email', email, res);
		await updatePassword(user, password, res);

		const updatedUser = await user.save();
		console.log(updatedUser);

		sendUserDetails(updatedUser, res, 'Settings updated successfully');
	} else {
		errorResponse(res, 404, 'User not found');
	}
});

export { logInUser, signUpUser, logOutUser, updateUserSettings };

function sendUserDetails(user, res, message, statusCode) {
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

function errorResponse(res, statusCode, message) {
	res.status(statusCode);

	throw new Error(message);
}

async function updateUniqueSetting(user, settingName, settingValue, res) {
	if (settingValue) {
		const settingExists = await User.findOne({ [settingName]: settingValue });

		if (settingExists) {
			const errorMessage = capitalize(settingName) + ' already in use';
			errorResponse(res, 400, errorMessage);
		}

		user[settingName] = settingValue;
	}
}

async function updatePassword(user, password, res) {
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
