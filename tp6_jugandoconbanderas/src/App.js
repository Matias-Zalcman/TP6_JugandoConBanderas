import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [paises, setPaises] = useState([]);
  const [pais, setPais] = useState({});
  const [puntaje, setPuntaje] = useState(0);

  const getPaises = () => axios.get('https://countriesnow.space/api/v0.1/countries/flag/images').then(res => {setPaises(res.data.data);});

  useEffect(() =>
  {
    getPaises();
    setPais(paises[Math.floor(Math.random()*paises.length)]);
  }, []);

  const comprobarPais = respuesta =>
  {
    if(respuesta == pais.name)
    {
      setPuntaje(puntaje + 10);
    }
    else
    {
      setPuntaje(puntaje - 1);
    }
    setPais(paises[Math.floor(Math.random()*paises.length)]);
  }

  return (
    <div className="App">
      <div className="card">
          <div className="title">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-diamonds-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" stroke-width="0" fill="currentColor" />
                </svg>
              </span>
              <p className="title-text">
                  Puntos
              </p>
          </div>
          <div className="data">
              <p>
                  {puntaje} 
              </p>
          </div>
      </div>
      { pais ? <img className="flag" src={pais.flag}></img> : <div></div> }
      <br></br>
      <p>Escribí a qué país pertenece esta bandera:</p>
      <form onSubmit={e => comprobarPais(e.target.nomPais.value)}>
        <input id="nomPais" className='input-text' type="text"/>
        <br></br>
        <input className='input-sub' type="submit" value="Enviar"/>
      </form>
    </div>
  );
}

export default App;
