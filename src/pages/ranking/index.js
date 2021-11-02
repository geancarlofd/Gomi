import React, { Component } from 'react';
import gomi from "../../assets/telaDescarte/gomi.png"
import gomiNome from "../../assets/telaDescarte/gomiNome.png"
import Menu from './headersRanking.js';
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
          
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                Posição
                <p>1º</p>
                <p>2º</p>
                <p>3º</p>
                <p>4º</p>
                <p>5º</p>
              </div>
              <div class="col">

                Nome
                <p>Gisele</p>
                <p>Gabriela</p>
                <p>Cavalli</p>
                <p>Geancarlo</p>
                <p>Dahle</p>

              </div>

              <div class="col">
                Pontos
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
    )
  }
}

export default App;