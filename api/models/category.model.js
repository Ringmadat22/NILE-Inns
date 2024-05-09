import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    hotel: {
      type: Boolean,
      required: true,
    },
    residentialBuilding: {
      type: Boolean,
      required: true,
    },
    office: {
      type: Boolean,
      required: true,
    },
    land: {
      type: Number,
      required: true,
    },
    storageRooms: {
      type: Boolean,
      required: true,
    },
    commercialBuildings: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('catogary', listingSchema);

export default Listing;