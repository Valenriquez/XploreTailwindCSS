import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AnotherPage() {
  const [resText, setResText] = useState('');
  const router = useRouter();
  const { apiUrl } = router.query;

  useEffect(() => {
    if (apiUrl) {
      // Fetch data from the provided API route
      fetch(apiUrl as string)
        .then(response => response.json())
        .then(data => {
          setResText(data.resText);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [apiUrl]);

  return (
    <div className="text-center p-4">  
      <h1 className="text-blue-500 text-2xl">Displaying resText from API</h1>
      <p className="text-lg">{resText}</p>
    </div>
  );
}

export default AnotherPage;
