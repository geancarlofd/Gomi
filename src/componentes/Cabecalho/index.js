import React from 'react';
import './index.css'
import Example from './carrossel.js';

function Cabecalho() {
    return (
        <div>
            <div className="BarraMenu">
                <p className="titulo">Esta parte é um Cabeçalho :)</p>
                <Example />
            </div>
        </div>
    )
}

export default Cabecalho