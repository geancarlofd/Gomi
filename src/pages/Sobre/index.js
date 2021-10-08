import React from 'react';
import './css/index.css'

function Card() {
    return (
        <div>
            <div className="Card">
                <h2>Sobre</h2>
                <h4>O site foi feito com muito amor, então por gentileza gostem dele. Caso constrário, não posso te obrigar a gostar. Porém agora eu tenho o IP do computador.</h4>
                <h3>Bons Sonhos :)</h3>

            </div>
        </div>
    )
}

function Sobre() {
    return (
        <div>
            <Card/>
        </div>
    )
}

export default Sobre