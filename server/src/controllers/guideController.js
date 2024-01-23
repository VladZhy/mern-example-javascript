import asyncHandler from 'express-async-handler';
import Guide from '../models/guideModel.js';

// @desc    Create a new guide
// @route   POST /guides/create-guide
// @access  Private
const createGuide = asyncHandler(async (req, res) => {
  const { title, description, thumbnail } = req.body;

  const guideExists = await Guide.findOne({ title });

  if (guideExists) {
    errorResponse(res, 400, 'Guide already exists');
  }

  const guide = await Guide.create({
    title,
    description,
    thumbnail,
  });

  if (guide) {
    sendGuideDetails(guide, res, 'Guide created successfully', 201);
  } else {
    errorResponse(res, 400, 'Invalid guide data');
  }
});

export { createGuide };

function errorResponse(res, statusCode, message) {
  res.status(statusCode);

  throw new Error(message);
}

function sendGuideDetails(guide, res, message, statusCode) {
  if (statusCode) {
    res.status(statusCode);
  }

  res.json({
    message: message,
  });
}
