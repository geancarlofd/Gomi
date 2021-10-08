import React from 'react';


import './index.css'

function Card() {
    return (
        <div>
            <div className="secondary">
                <h2>Contato</h2>
                <h4>Email: gisele.cavalli@pucpr.edu.br</h4>
                <h4>Telefone: (41) 6666-6666</h4>
                <h5>Horário de atendimento: 03:00 - 15:00</h5>
                <h5>Responderei assim que possível. Obrigada pela compreensão!</h5>
            </div>
        </div>
    )
}

function Contato() {
    return (
        <div>
            <Card/>
        </div>
    )
}

export default Contato

