import Listing from '../models/listing.model.js';
import Category from '../models/category.model.js';
import Building from '../models/building.model.js'
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only update your own listings!'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const searchTerm = req.query.searchTerm || '';
    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';

    // Define an empty filter object
    const filter = {};

    // Check if offer is provided in the query
    if (req.query.offer !== undefined && req.query.offer !== 'all') {
      filter.offer = req.query.offer === 'true';
    }

    // Check if furnished is provided in the query
    if (req.query.furnished !== undefined && req.query.furnished !== 'all') {
      filter.furnished = req.query.furnished === 'true';
    }

    // Check if parking is provided in the query
    if (req.query.parking !== undefined && req.query.parking !== 'all') {
      filter.parking = req.query.parking === 'true';
    }

    // Check if type is provided in the query
    if (req.query.type !== undefined && req.query.type !== 'all') {
      filter.type = req.query.type;
    }

    // Check if any specific category is provided in the query
    if (req.query.category !== undefined && req.query.category !== 'all') {
      // Assuming category is passed as a query parameter
      const category = req.query.category;
      // Assuming you have different models for different categories
      switch (category) {
        case 'hotel':
          filter.hotel = true;
          break;
        case 'residential':
          filter.residentialBuilding = true;
          break;
        case 'office':
          filter.office = true;
          break;
        // Add more cases for other categories if needed
        default:
          break;
      }
    }

    // Check if any specific building type is provided in the query
    if (req.query.buildingType !== undefined && req.query.buildingType !== 'all') {
      // Assuming buildingType is passed as a query parameter
      const buildingType = req.query.buildingType;
      // Assuming you have different models for different building types
      switch (buildingType) {
        case 'apartment':
          filter.apartment = true;
          break;
        case 'bungalow':
          filter.bungalow = true;
          break;
        case 'storeyBuilding':
          filter.storeyBuilding = true;
          break;
        // Add more cases for other building types if needed
        default:
          break;
      }
    }

    // Query the database based on the filter
    const listings = await Listing.find({
      $and: [
        { name: { $regex: searchTerm, $options: 'i' } },
        filter,
      ],
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

