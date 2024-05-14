// pages/anotherPage.js
"use client"

import { useState, useEffect } from 'react';


function AnotherPage() {
  const [resText, setResText] = useState('');

  useEffect(() => {
    // Fetch data from your API route
    fetch('/api/hello') // Update this URL with your API route
      .then(response => response.json())
      .then(data => {
        setResText(data.resText);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="text-center p-4">  
      <h1 className="text-blue-500 text-2xl">Displaying resText from API</h1>
      <p className="text-lg">{resText}</p>
    </div>
  );
}

export default AnotherPage;
