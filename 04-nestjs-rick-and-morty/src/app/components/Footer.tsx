"use client"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          Rick and Morty {new Date().getFullYear()} Valeria Enríquez Limón
        </p>
      </div>
    </footer>
  );
};

export default Footer;
