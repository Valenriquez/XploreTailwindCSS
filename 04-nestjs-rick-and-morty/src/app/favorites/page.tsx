"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header2 from "../components/Header2";

type character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
};

export default function Favorites() {
  const [characters, setCharacters] = useState<character[]>([]);
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const favoritesFromStorage = localStorage.getItem("favorites");
      const favoritesArray = JSON.parse(favoritesFromStorage!);
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      let favoriteCharacters = data.results;
      favoriteCharacters = favoriteCharacters.filter((character: character) =>
        favoritesArray.includes(character.id)
      );
      setCharacters(favoriteCharacters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header2></Header2>
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
          {characters.map((character, index) => (
            <Card
              key={index}
              id={character.id!}
              imgUrl={character.image!}
              name={character.name!}
              status={character.status!}
              species={character.species!}
              gender={character.gender!}
              location={character.location.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}