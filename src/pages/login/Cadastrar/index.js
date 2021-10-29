import React, { useEffect, useState} from 'react';
import {useHistory } from 'react-router-dom';
import '../../../rotas'
import firebase from '../../../firebase';

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

        if(redirect) {
            history.push('/')
        }

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                history.push('/timeline')
            }
        });
    });

    function MudarTela(){
        setRedirect(true)
    }

    function verificarCampos(){
        var vetor = [nome, sobrenome, dtaNasc, email, senha, senhaConfirm]

        //Verificar Campos
        for(var x = 0; x < vetor.length ; x++){
            if (vetor[x] == null){
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
        if ((date.getFullYear() - parseInt(data[0])) < 16){//calculo ano ataul - ano de nascimento user.
            console.log("IDADE")
            setMensagemIdade("Idade Minima 16 anos")
            return false
        }else{
            setMensagemIdade("")
        }
        return true
    }

    async function cadastrar(){
        if(verificarCampos()){

            await firebase.auth().createUserWithEmailAndPassword(email, senha).then(async (usuario) => {
                console.log('Firestore: ' + usuario.user.uid)
                    await firebase.firestore().collection("dadosUsuario").add({
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        dtaNasc: dtaNasc,
                        amigos: []
                    }).then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    }).catch((error) => {
                        console.error("Error adding document: ", error);
                    });

            }).catch((error) => {
                console.log("Erro: " + error);
                if (error.code === "auth/email-already-in-use"){//Caso o email ja estiver sendo utilizado
                    setMensagem('E-mail já cadastrado')
                }
                else if (error.code === "auth/weak-password") {//Caso a senha for fraca
                    setMensagem('Senha Fraca')
                }
                else{
                    setMensagem('Dados inseridos inválidos')//Mensagem padrao de erro
                }

            });
        }
        else{
            setMensagem('Dados inseridos inválidos')
        }
    }

    return(
        <div>
            <button onClick={MudarTela}>Voltar</button>

            <div className="cadastrar-box">
                <p>Nome:</p>
                <input type="text" onChange={(e) => { setNome(e.target.value) }}/>
                <p>Sobrenome:</p>
                <input type="text" onChange={(e) => { setSobrenome(e.target.value) }}/>
                <p>Data de Nascimento:</p>
                <input type="Date" onChange={(e) => { setDtaNasc(e.target.value) }}/> <p>{mensagemIdade}</p>
                <p>Email:</p>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }}/>
                <p>Senha:</p>
                <input type="password" onChange={(e) => { setSenha(e.target.value) }}/>
                <p>Confirmar Senha:</p>
                <input type="password" onChange={(e) => { setSenhaConfirm(e.target.value) }}/> <br />
                
                <p>{mensagem}</p>

                <button onClick={cadastrar}>Cadastrar</button>
            </div>

        </div>
        )
    
}


export default Cadastrar