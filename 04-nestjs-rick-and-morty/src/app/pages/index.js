// pages/index.js

import Home from '../components/Home';

export default function Index({ characters }) {
  return <Home characters={characters} />;
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/characters');
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
