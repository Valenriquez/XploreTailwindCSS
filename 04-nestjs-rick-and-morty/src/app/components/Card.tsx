"use client"
import { useEffect, useState } from "react";

export default function Card({
    id,
    imgUrl,
    name,
    status,
    species,
    gender,
    location,
  }: Props) {
    const [favorite, setFavorite] = useState<boolean>(false);
  
    useEffect(() => {
      // Load favorite characters from local storage
      const favoritesFromStorage = localStorage.getItem("favorites");
      if (favoritesFromStorage) {
        const favoritesArray = JSON.parse(favoritesFromStorage);
        setFavorite(favoritesArray.includes(id));
      }
    }, [id]);
  
    const toggleFavorite = () => {
      setFavorite(!favorite);
      let favoritesArray: number[] = [];
      const favoritesFromStorage = localStorage.getItem("favorites");
      if (favoritesFromStorage) {
        favoritesArray = JSON.parse(favoritesFromStorage);
      }
      if (favorite) {
        favoritesArray = favoritesArray.filter((favId: number) => favId !== id);
      } else {
        favoritesArray.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    };
  
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md max-w-md">
        <div className="relative">
          <img className="rounded-t-lg w-full" src={imgUrl} alt="" />
          <div
            className={`absolute top-0 right-0 p-1 bg-gray-900 text-white rounded-bl-lg ${
              favorite ? "block" : "hidden"
            }`}
          >
          
          </div>
        </div>
        <div className="p-4">
          <h5 className="mb-2 text-lg font-semibold">{name}</h5>
          <p className="mb-1 text-sm text-gray-600">Status: {status}</p>
          <p className="mb-1 text-sm text-gray-600">Location: {location}</p>
          <p className="mb-1 text-sm text-gray-600">Species: {species}</p>
          <p className="mb-1 text-sm text-gray-600">Gender: {gender}</p>
          <button
            onClick={toggleFavorite}
            className="focus:outline-none transform transition-transform duration-300 hover:scale-150"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`${favorite ? "yellow" : "none"}`}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-max"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
            </svg>
            </button>
          <a
            href={`/characterprofile?id=${id}`}
            className="block mt-2 text-sm font-semibold text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
  