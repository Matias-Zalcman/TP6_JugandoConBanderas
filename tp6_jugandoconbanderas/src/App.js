import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [pais, setPais] = useState({});

  const getPais = () => axios.get('https://countriesnow.space/api/v0.1/countries/flag/images').then(res => {setPais(res.data[Math.floor(Math.random()*res.data.length)]);});

  useEffect(() =>
  {
    getPais();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
