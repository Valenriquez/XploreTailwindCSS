// pages/api/characters.js

import { getCharacters } from '../../backend';
import Home from '../../components/Home';

export default async function handler(req, res) {
  const characters = await getCharacters();
  res.status(200).json(characters);
}
