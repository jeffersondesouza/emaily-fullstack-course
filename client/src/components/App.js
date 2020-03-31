import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const st = useSelector(state => state);
  console.log('st:', st)

  return (
    <div className="App">
      <h1>Welcome to Emaily!</h1>
    </div>
  );
}

export default App;
