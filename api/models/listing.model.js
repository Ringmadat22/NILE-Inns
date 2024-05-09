import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    // Fields from the original schema
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    // Fields from the category schema
    hotel: {
      type:Boolean,
      required: true
    },
    residentialBuilding: {
      type:Boolean,
      required: true
    },

    office: {
      type:Boolean,
      required: true
    },

    land: {
      type:Number,
      required: true
    },

    storageRooms: {
      type:Boolean,
      required: true
    },

    apartment: {
      type:Boolean,
      required: true
    },

    bangalow: {
      type:Boolean,
      required: true
    },

    storeyBuilding: {
      type:Boolean,
      required: true
    },
    floors: {
      type: Number,
      required: function () {
        return this.storeyBuilding; // Only required if storeyBuilding is true
      },
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
