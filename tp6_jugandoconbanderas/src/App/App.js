import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import Puntaje from '../Puntaje/Puntaje.js';

function App() {
  const [pais, setPais] = useState({});
  const [puntaje, setPuntaje] = useState(0);
  const [timer, setTimer] = useState(15);
  const [ref, setRef] = useState();
  const [animacion, setAnimacion] = useState(<div className='loader animateDescriptor' ></div>);

  const getPais = () => axios.get('https://countriesnow.space/api/v0.1/countries/flag/images').then(res => { setPais(res.data.data[Math.floor(Math.random() * res.data.data.length)]); });

  useEffect(() => {
    getPais();
  }, []);

  useEffect(() => {
    // Update the count down every 1 second
    setRef(setTimeout(function () {
      setTimer(timer - 1);
      console.log(timer);
      if (timer < 1) {
        resetTimer();
        setPuntaje(puntaje - 1);
      }
    }, 1000));
  }, [timer]);

  const resetTimer = () => {
    clearTimeout(ref);
    getPais();
    setAnimacion("");
    setTimeout(() => { setAnimacion(<div className='loader animateDescriptor' ></div>); }, 100);
    setTimer(15);
  }

  const comprobarPais = e => {
    e.preventDefault();
    const respuesta = e.target.nomPais.value
    e.target.nomPais.value = "";
    if (respuesta.toLowerCase() === pais.name.toLowerCase()) {
      setPuntaje(puntaje + 10 + timer);
    }
    else {
      setPuntaje(puntaje - 1);
    }
    resetTimer();
  }

  return (
    <div className="App">
      <div>{animacion}</div>
      <Puntaje puntos={puntaje}></Puntaje>
      {pais ? <img className="flag" src={pais.flag}></img> : <div></div>}
      <br></br>
      <p className='subtitulo'>Escribí a qué país pertenece esta bandera:</p>
      <Form comprobarPais={comprobarPais}></Form>
    </div>
  );
}

export default App;
