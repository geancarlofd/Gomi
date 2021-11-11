import React, { useEffect, useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import '../../../rotas'
import firebase from '../../../firebase';
import './cadastrar.css';
import seta from "../../../assets/cadastrar/seta.png";

function Cadastrar() {


    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [dtaNasc, setDtaNasc] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senhaConfirm, setSenhaConfirm] = useState();

    const [mensagem, setMensagem] = useState();
    const [mensagemIdade, setMensagemIdade] = useState();

    const [redirect, setRedirect] = useState(false);
    const history = useHistory();


    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Cadastrar`;

        if (redirect) {
            history.push('/')
        }
    });

    function MudarTela() {
        setRedirect(true)
    }

    function verificarCampos() {
        var vetor = [nome, sobrenome, dtaNasc, email, senha, senhaConfirm]

        //Verificar Campos
        for (var x = 0; x < vetor.length; x++) {
            if (vetor[x] == null) {
                return false
            }
        }

        //Verificar Senha
        if (senha != senhaConfirm) {
            return false
        }
        var date = new Date();
        var data = dtaNasc.split("-");
        //Verifica se o usuario tem mais de 16 anos
        if ((date.getFullYear() - parseInt(data[0])) < 16) {//calculo ano ataul - ano de nascimento user.
            console.log("IDADE")
            setMensagemIdade("Idade Minima 16 anos")
            return false
        } else {
            setMensagemIdade("")
        }
        return true
    }

    async function cadastrar() {
        if (verificarCampos()) {

            await firebase.auth().createUserWithEmailAndPassword(email, senha).then(async (usuario) => {
                console.log('Firestore: ' + usuario.user.uid)
                await firebase.firestore().collection("dadosUsuario").doc(usuario.user.uid).set({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    dtaNasc: dtaNasc,
                    pontos:0,
                    amigos: []
                }).then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });

                await firebase.auth().signInWithEmailAndPassword(email, senha).then((auth) => {
                    console.log(auth)
                    const userLogado = firebase.auth().currentUser;

                    userLogado.updateProfile({
                        displayName: nome + " " + sobrenome,
                    }).then((updateProfile) => {
                        console.log(updateProfile)
                    }).catch((error) => {
                        console.log('Error:' + error)
                    });

                    // await firebase.storage().ref("imgUsuario").child(uid).put(arquivo).then((response) => {
                    //     console.log("Upload feito!");
                    // });

                }).catch((error) => {
                    console.log("Erro: " + error);
                    setMensagem('Usuário ou senha inválidos')
                });

            }).catch((error) => {
                console.log("Erro: " + error);
                if (error.code === "auth/email-already-in-use") {//Caso o email ja estiver sendo utilizado
                    setMensagem('E-mail já cadastrado')
                }
                else if (error.code === "auth/weak-password") {//Caso a senha for fraca
                    setMensagem('Senha Fraca')
                }
                else {
                    setMensagem('Dados inseridos inválidos')//Mensagem padrao de erro
                }

            });
        }
        else {
            setMensagem('Dados inseridos inválidos')
        }

        //setRedirect(true)
    }

    return (
        <div className="gradient">
            <Link to="/login"><img className="seta" src={seta}></img></Link>
            {/* <button className="btn-voltar-cadastrar" onClick={MudarTela}>Voltar</button> */}

            <div className="card-cadastrar">
                <p className="text-cadastrar">Nome:</p>
                <input className="input-cadastrar" type="text" placeholder="Nome" onChange={(e) => { setNome(e.target.value) }}/>
                <p className="text-cadastrar-lastname">Sobrenome:</p>
                <input className="input-cadastrar" type="text" placeholder="Sobrenome" onChange={(e) => { setSobrenome(e.target.value) }}/>
                <p className="text-cadastrar-birthday">Data de Nascimento:</p>
                <input className="input-cadastrar" type="Date" onChange={(e) => { setDtaNasc(e.target.value) }}/> <p>{mensagemIdade}</p>
                <p className="text-cadastrar">Email:</p>
                <input className="input-cadastrar" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/>
                <p className="text-cadastrar">Senha:</p>
                <input className="input-cadastrar" type="password" placeholder="Senha" onChange={(e) => { setSenha(e.target.value) }}/>
                <p className="text-cadastrar-confirm-password">Confirmar Senha:</p>
                <input className="input-cadastrar" type="password" placeholder="Confirmar Senha" onChange={(e) => { setSenhaConfirm(e.target.value) }}/> <br />
                <p>{mensagem}</p>

                <button className="btn-cadastrar-cadastrar" onClick={cadastrar}>Cadastrar</button>
            </div>
        </div>
    )
}

export default Cadastrar;