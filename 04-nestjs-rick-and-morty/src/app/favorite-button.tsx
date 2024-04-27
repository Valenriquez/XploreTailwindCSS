// Import React from 'react' if not already imported
'use client'

import React from 'react';

export default  function FavoriteButton({ characterId, isFavorite, toggleFavorite }) {
  const handleClick = () => {
    toggleFavorite(characterId);
  };

  return (
    <button
      className={`absolute top-0 right-0 mt-1 mr-1 ${
        isFavorite ? 'text-yellow-500' : 'text-gray-400'
      }`}
      onClick={handleClick}
      style={{ fontSize: '34px' }} // Adjust the font size here
    >
      &#9733;
    </button>
  );
}

 