import mongoose from 'mongoose';
const schema = mongoose.Schema;


const favoriteSchema = new mongoose.Schema(
  {
    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model (assuming you have a User model)
      required: true,
    },
    listingRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing', // Reference to the Listing model
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default Favorite;
