import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, UncontrolledAlert
} from 'reactstrap';
import "./listaDescarte.css";

/*function alertaExclusaoDescarte() {
  return (
    <UncontrolledAlert color="info">
      ;------------------;
    </UncontrolledAlert>

  );
}*/

const ListaDescarte = (props) => {
  return (
    <div>
      
      <table className="table-tamanho-lista-descarte">
      <Card>
        <CardBody>
        <tr>
          <th>
          <CardTitle tag="h5" className="table-titulo-mor">Descarte</CardTitle> <br/>
          </th>
        </tr>

        <tr>
          <td>
           <CardSubtitle tag="h6" className="table-titulo-lista">Lixo Descartado: </CardSubtitle> 
          </td>
          <td>
            <CardText className="td-resposta">{props.nomeLixoDescarte}</CardText> 
          </td>

          <td>
            <CardSubtitle tag="h6" className="table-titulo-lista">Quantidade: </CardSubtitle> 
          </td>
          <td>
            <CardText className="td-resposta">{props.qtdeDescarte}</CardText> 
          </td>
        </tr>

        <tr>
          <td>
            <CardSubtitle tag="h6" className="table-titulo-lista">Data Descarte:  </CardSubtitle> 
          </td>
          <td>
            <CardText className="td-resposta">{props.dataDescarte}</CardText> 
          </td>
        </tr>

        <tr>
          <td>
            <CardSubtitle tag="h6" className="table-titulo-lista">Tipo do Lixo:  </CardSubtitle> 
          </td>

          <td>
            <CardText className="td-resposta">{props.tipoLixoDescarte}</CardText> 
          </td>

          <td>
            <CardSubtitle tag="h6" className="table-titulo-lista">Forma de Descarte:  </CardSubtitle> 
          </td>
          <td>
            <CardText className="td-resposta">{props.formaDescarte}</CardText> 
          </td>
        </tr>


        <tr>
          <td colSpan="4"></td>
          <td>
            <button className="btn-editar">Editar</button> 
          </td>
          <td>
            <button className="btn-excluir"  type="submit">Excluir</button>
          </td>
        </tr>
        </CardBody>
      </Card>
      </table>
        
    </div>
  );
};

export default ListaDescarte;