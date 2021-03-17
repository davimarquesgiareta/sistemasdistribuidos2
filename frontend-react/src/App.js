import React, {useEffect, useState} from 'react';
import axios from './api/axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const guitars = await axios.get('/guitars');

    setData(guitars.data);
  }, []);
  console.log(data)

  return (
    <div className="App">
      ola
        {data && data.map(guitar => {
          return <p>{guitar.price}</p>
        })}
    </div>
  );
}

export default App;
