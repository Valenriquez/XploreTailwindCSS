// backend.js

const fetch = require('node-fetch');

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
}

module.exports = { getCharacters };
