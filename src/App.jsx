import React, { useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);

  const addTour = (newTour) => {
    setTours([...tours, newTour]);
  };

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <Gallery tours={tours} addTour={addTour} removeTour={removeTour} />
    </div>
  );
}

export default App;
