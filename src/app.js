import React, { useCallback } from 'react';
import axios from 'axios';

function App() {
  const getData = useCallback(() => {
    axios.get('/api/getName')
      .then(
        res => {
          console.log(res);
        }
      )
  })

  return (
    <div>
      <div>Hello world!!</div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App;
