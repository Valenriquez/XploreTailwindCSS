"use client";
import Image from "next/image";
 
import { useEffect, useState } from "react";

type character = {
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
  const [characters, setCharacters] = useState<character[]>([]);
  // Function to fetch data from the API
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

  return (
    <>
      
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
          {characters.map((character, index) => (
            
             
              character.name
               
          ))}
        </div>
      </div>
    </>
  );
}