import mongoose from 'mongoose';

const guideSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Guide = mongoose.model('Guide', guideSchema);

export default Guide;
