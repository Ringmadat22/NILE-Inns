import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    apartment: {
      type: Boolean,
      required: true,
    },
    bangalow: {
      type: Boolean,
      required: true,
    },
    storeyBuilding: {
      type: Boolean,
      required: true,
    },
    floors: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('building', listingSchema);

export default Listing;