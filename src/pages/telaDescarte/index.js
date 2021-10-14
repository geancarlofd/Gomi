import React, { Component } from 'react';
import "./index.css";
import gomi from "../../assets/telaDescarte/gomi.png";
import gomiNome from "../../assets/telaDescarte/gomiNome.png";
import Menu from './HeadersDescarte/headersDescarte.js';
import FormularioDescarte from './FormularioDescarte/formularioDescarte.js';
import ListaDescarte from './ListaDescarte/listaDescarte.js';



class App extends Component{

    constructor(props){
      super(props);

      this.state = {

      }
    }

    componentDidMount() {
        document.title = 'Tela de Descarte';
    }

    render(){
      return(

        /* Menu Tela de Descarte */
        <div className="body">

          <div className="bcg-cabecalho">
            <img className="imgGomi" src={gomi}></img>
            <img className="imgGomiNome" src={gomiNome}></img>
            <Menu />
          </div>

          <div>
            <br/>
            <p className="text-descarte">Esta tela é referente a Tela de Descarte, onde você irá cadastrar seus descartes. </p>
            <br/>
            <FormularioDescarte />
          </div>

          <br/>

          <div>
            <ListaDescarte />
          </div>

            
        </div>  
      )
    }
}



export default App;