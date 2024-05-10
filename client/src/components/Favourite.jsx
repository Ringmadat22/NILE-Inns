import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/user/favorites'); // Adjust the endpoint accordingly
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div>
      <h2>Favorite Listings</h2>
      <div>
        {favorites.map(favorite => (
          <div key={favorite._id}>
            <h3>{favorite.name}</h3>
            <p>{favorite.address}</p>
            <p>Price: ${favorite.price}</p>
            <p>Bedrooms: {favorite.bedrooms}</p>
            <button onClick={() => removeFavorite(favorite._id)}>Remove Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
