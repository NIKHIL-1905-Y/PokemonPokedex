import { useState, useEffect } from 'react';
import './App.css';
import CustomRoutes from './routes/CustomRoutes';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate data fetching or app initialization
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        // Show loader when loading is true
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        // Show the main app once loading is false
        <>
          <div className="pokedex-header"></div>
          <CustomRoutes />
        </>
      )}
    </>
  );
}

export default App;
