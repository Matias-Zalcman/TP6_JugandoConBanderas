import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [pais, setPais] = useState({});
  const [puntaje, setPuntaje] = useState(0);
  const [timer, setTimer] = useState(15);

  // Update the count down every 1 second
  let x = setTimeout(function() {
    setTimer(timer-1);
    console.log(timer);
    if (timer < 1) {
      resetTimer();
      setPuntaje(puntaje - 1);
    }
  }, 1000);

  const getPais = () => axios.get('https://countriesnow.space/api/v0.1/countries/flag/images').then(res => {setPais(res.data.data[Math.floor(Math.random()*res.data.data.length)]);});

  useEffect(() => {getPais();}, []);

  const startAnimation = (element) =>
  {
    element.classList.add("animateDescriptor");
    element.addEventListener( "animationend",  function() {
      element.classList.remove("animateDescriptor");    
  } );
  }

  const resetTimer = () =>
  {
    clearTimeout(x);
    getPais();
    setTimer(15);
    startAnimation(document.getElementById('timer'));
    document.getElementById("nomPais").value = "";
  }

  const comprobarPais = e =>
  {
    e.preventDefault();
    const respuesta = e.target.nomPais.value
    resetTimer();
    if(respuesta.toLowerCase() === pais.name.toLowerCase())
    {
      setPuntaje(puntaje + 10 + timer);
    }
    else
    {
      setPuntaje(puntaje - 1);
    }
  }

  return (
    <div className="App">
      <div className="countdown"><div id="timer" className='loader animateDescriptor'></div></div>
      <div className="card">
          <div className="title">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-diamonds-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" strokeWidth="0" fill="currentColor" />
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
      <p className='subtitulo'>Escribí a qué país pertenece esta bandera:</p>
      <form onSubmit={e => comprobarPais(e)}>
        <input id="nomPais" className='input-text' type="text"/>
        <br></br>
        <input id='restart' className='input-sub' type="submit" value="Enviar"/>
      </form>
    </div>
  );
}

export default App;
