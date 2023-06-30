import './Puntaje.css';
import PropTypes from 'prop-types';

function Puntaje({puntos}) {
    return (
        <div className="card">
            <div className="title">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-diamonds-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" strokeWidth="0" fill="currentColor" />
                </svg>
            </span>
            <p className="title-text">
                Puntos
            </p>
            </div>
            <div className="data">
            <p>
                {puntos}
            </p>
            </div>
        </div>
    );
}

Puntaje.propTypes = {
    puntos: PropTypes.number
}

export default Puntaje;