"use client"
import Image from "next/image";
import Card from "./components/Card";
import NavBar from "./components/Navbar";
import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  location: {
    name: string;
    url: string;
  };
};

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCharacter === id) {
      setSelectedCharacter(null);
    } else { 
      setSelectedCharacter(id);
    }
  };

  return (
    <>
      <NavBar/> 
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
          {characters.map((character, index) => (
            <div
              className={`card p-4 border border-gray-300 rounded bg-white shadow transition-transform duration-300 ease-in-out ${
                selectedCharacter === character.id ? 'scale-110' : ''
              }`}
              onClick={() => handleCardClick(character.id)}
            >
              <Card
                key={index}
                id={character.id!}
                imgUrl={character.image}
                name={character.name!}
                status={character.status!}
                species={character.species!}
                gender={character.gender!}
                location={character.location.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
