import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InputPage() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/new?apiUrl=/api/hello?param=${encodeURIComponent(input)}`);
  };
 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          style={{ padding: '8px', marginBottom: '16px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }} 
          placeholder="Enter your query" 
        />
        <button 
          type="submit" 
          style={{ padding: '8px 16px', borderRadius: '4px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }} 
        >
          Submit
        </button>
      </form>
    </div>
  );
}
