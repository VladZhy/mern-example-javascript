import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	const token = req.cookies.jwt;

	if (token) {
		try {
			// const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

			// req.user = await User.findById(decoded.userId);

			// next();

			jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

			next();
		} catch (error) {
			res.status(401);

			throw new Error('Not authorized, token verification failed');
		}
	} else {
		res.status(401);

		throw new Error('Not authorized, no token');
	}
});

export { protect };
