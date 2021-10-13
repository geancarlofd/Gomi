import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase';

class Cadastrar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNasc: "",
            email: "",
            senha: "",
            senhaConf: "",
        }
        this.cadastrar = this.cadastrar.bind(this);

    }

    async cadastrar(){
        //VERIFICAR CAMPOS
        //vERIFICAR SENHAS
        //IF OK CADASTRAR USER
        alert('aaaaa')
    }

    render(){
        return(
            <div>
                <Link to='/'><button>Voltar</button></Link>

                <div className="cadastrar-box">
                    <p>Nome:</p>
                    <input type="text"/>
                    <p>Sobrenome:</p>
                    <input type="text" />
                    <p>Data de Nascimento:</p>
                    <input type="Date" />
                    <p>Email:</p>
                    <input type="text" />
                    <p>Senha:</p>
                    <input type="password" />
                    <p>Confirmar Senha:</p>
                    <input type="password" /> <br />

                    <button onClick={this.cadastrar}>Cadastrar</button>
                </div>

            </div>
        )
    }
    
}


export default Cadastrar