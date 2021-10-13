import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            senha: ""
        }
        this.entrar = this.entrar.bind(this);

    }

    async entrar(){
        //FAZER LOGIN
        await firebase.auth().signInWithEmailAndPassword(this.state.usuario, this.state.senha)
    }

    componentDidMount() {
        document.title = "Gomi - Login"
    }

    render() {
        return (
            <div>
                <div className="login-box">
                    <p>Usuário:</p>
                    <input type="Text" placeholder="Usuário" onChange={(e) => this.setState({ usuario: e.target.value })} /><br />
                    <p>Senha:</p>
                    <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} /><br />

                    <button onClick={this.entrar}>Entrar</button> <br />
                    <Link to='/cadastrar'><button>Cadastrar</button> <br /></Link>
                </div>
            </div>

        )
    }
}


export default Login