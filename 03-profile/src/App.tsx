import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
