import './Form.css';
import PropTypes from 'prop-types';

function Form({comprobarPais}) {
    return (
        <form onSubmit={e => comprobarPais(e)}>
            <input id="nomPais" className='input-text' type="text" />
            <br></br>
            <input id='restart' className='input-sub' type="submit" value="Enviar" />
        </form>
    );
}

Form.propTypes = {
    comprobarPais: PropTypes.func.isRequired
}

export default Form;