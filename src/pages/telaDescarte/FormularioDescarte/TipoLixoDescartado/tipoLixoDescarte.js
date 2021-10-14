
import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';
/*
const tipoLixoDescarte = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th rowSpan="1" className="table-titulo">
                        Tipo de Reciclável:
                    </th>
                </tr>

                <tr>
                    <td>
                        <FormGroup row>
                            <Col sm={30}>
                                <Input type="select" name="select" id="exampleSelect2">
                                    <option id="1">Tipo 1</option>
                                    <option id="2">Tipo 2</option>
                                    <option id="3">Tipo 3</option>
                                    <option id="4">Tipo 4</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </td>
                </tr>
                
            </table>
        </div>
    );
};



export default tipoLixoDescarte;

*/

var a;
function show_options() {
    if (a == 1){
        document.getElementById("lixoReciclavel").style.display="inline";
        return <table>
        <tr>
            <th rowSpan="1" className="table-titulo">
                Tipo de Reciclável:
            </th>
        </tr>

        <tr>
            <td>
                <FormGroup row>
                    <Col sm={30}>
                        <Input type="select" name="select" id="exampleSelect2">
                            <option id="1">Tipo 1</option>
                            <option id="2">Tipo 2</option>
                            <option id="3">Tipo 3</option>
                            <option id="4">Tipo 4</option>
                        </Input>
                    </Col>
                </FormGroup>
            </td>
        </tr>
        
    </table>
     
    }

    else {
       document.getElementById("lixoReciclavel") .style.display="none";
       return a = 1;
    }
}

export default show_options;