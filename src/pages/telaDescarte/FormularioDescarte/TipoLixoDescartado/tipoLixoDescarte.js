
import React, { useEffect, useState } from "react";
import { Col, FormGroup,  Input } from 'reactstrap';

const tipoReciclavelDescarte = (props) => {
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
                                <Input type="select" name="select" id="exampleSelect2" onChange={(e) => 
                                 { setTipoReciclavelDescarte(e.target.value) }}>
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



export default tipoReciclavelDescarte;
