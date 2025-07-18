// App.js
import React from 'react';
import WishList from './app/wish-list/WishList';

const App = () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];

  return (
    <div className="App">
      <WishList initialLocations={initialLocations} />
    </div>
  );
};

export default App;
