import React, { Component } from 'react';
import gomi from "../../assets/telaDescarte/gomi.png";
import gomiNome from "../../assets/telaDescarte/gomiNome.png";
import Menu from './HeadersRaking/headersRanking.js';
import './ranking.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    document.title = 'Ranking';
  }

  render() {
    return (
      <div>
          <div className="body">
            <div className="bcg-cabecalho">
              <img className="imgGomi" src={gomi}></img>
              <img className="imgGomiNome" src={gomiNome}></img>
              <Menu />
            </div>
            <div className="img-ranking">
              
          {/* Tabela do Ranking */}
          
            <div className="table-ranking">
              
              <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <p className="title-column-ranking">Posição</p>
                      <p className="first-position-ranking">1º</p>
                      <p className="second-position-ranking">2º</p>
                      <p className="third-position-ranking">3º </p>
                      <p>4º</p>
                      <p>6º</p>
                      <p>7º</p>
                      <p>8º</p>
                      <p>9º</p>
                      <p>10º</p>
                    </div>
                  
                  <div class="col">
                    <p className="title-column-ranking">Nome</p>
                    <p className="first-position-ranking">Gisele</p>
                    <p className="second-position-ranking">Gabriela</p>
                    <p className="third-position-ranking">Cavalli</p>
                    <p>Geancarlo</p>
                    <p>Dahle</p>
                    <p>Dahle</p>
                    <p>Dahle</p>
                    <p>Dahle</p>
                    <p>Dahle</p>
                  </div>

                  <div class="col">
                    <p className="title-column-ranking">Pontos</p>
                    <p className="first-position-ranking">100</p>
                    <p className="second-position-ranking">100</p>
                    <p className="third-position-ranking">100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;