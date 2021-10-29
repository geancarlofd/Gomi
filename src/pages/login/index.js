import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import "../login/index.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, UncontrolledAlert
  } from 'reactstrap';

function Login(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [redirect, setRedirect] = useState(false);
    const history = useHistory();



    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Login`;

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                console.log(user.uid);
                setMensagem('Logado')
                setUsuario('')
                setSenha('')
                history.push('/timeline')
            }
            else{

            }
        });
    });

    async function sair(){
        await firebase.auth().signOut();
        setMensagem('')
    }

    function validarCampos(){
        if (usuario == null || senha == null){
            return false
        }
        return true
    }
    async function entrar(){
        //FAZER LOGIN
        if(validarCampos()){
            await firebase.auth().signInWithEmailAndPassword(usuario, senha).then((auth) =>{
                console.log(auth)

                //if auth true IR PARA TIMELINE
                //if auth false MENSAGEM DE NÃO CONSEGUIR LOGAR(setState mensagem)
            }).catch((error) => {
                console.log("Erro: " + error);
                setMensagem('Usuário ou senha inválidos')
            });
        }else{
            setMensagem('Usuário ou senha inválidos')
        }
    }


    return (
        <div className="card">
            <Card>
                <CardBody >

                    <div className="login-box">
                        <CardTitle className="text-login"><u>Login:</u></CardTitle>
                        <input className="input" type="Text" placeholder="Usuário" onChange={(e) => { setUsuario(e.target.value) }} /><br />

                       {/* <CardTitle className="text-login">Senha:</CardTitle> */}
                        <input className="input" type="password" placeholder="Senha" onChange={(e) => { setSenha(e.target.value) }} /><br />
                        
                        <CardTitle className="text-login">{mensagem}</CardTitle>


                        <table className="btns">
                            <tr> <Button className="btn-entrar" onClick={entrar}> Entrar</Button><br /></tr>
                            <tr> <Button className="btn-sair" onClick={sair}>Sair </Button><br /></tr>
                            <tr> <Button className="btn-cadastrar"> <Link to='/cadastrar'>Cadastrar </Link></Button><br /></tr>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </div>
        
    )
}


export default Login