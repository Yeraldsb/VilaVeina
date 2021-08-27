import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./FormEnquestas.css";

import CustomDatePicker from "./customdatepicker";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";


export const FormEnquestas = () => {

    const [datepick] = useState(new Date());

    const history = useHistory();

    function handleOnSubmit(e) {
        e.preventDefault();
        alert("Hem rebut la seva enquesta");
        history.push("/");
    }


    return (
        <div className={"formularienquestadiv"}>

            <Form className={"formularienquesta"} onSubmit={handleOnSubmit}>
                <div className={"columna1"}>

                    <div className={"formdata"}>
                        <Form.Group>
                            <Form.Label> Data : </Form.Label>
                        </Form.Group>
                        <Form.Group className={"formdatepicker"}>
                            <CustomDatePicker
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                selected={datepick}
                            />
                        </Form.Group>
                    </div>

                    <Form.Group>
                        <Form.Label> Vila Veïna : </Form.Label>
                        <Form.Select>
                            <option>Badal</option>
                            <option>Carmel de dalt</option>
                            <option>Casc antic d'Horta</option>
                            <option>Casc antic Les Corts</option>
                            <option>Consell de Cent - Girona - Eixample</option>
                            <option>El Camp de l'Arpa - Alchemika</option>
                            <option>El Congrés i els Indians</option>
                            <option>Gotic</option>
                            <option>La Marina - Mare de Déu del Port</option>
                            <option>La Trinidad Vella</option>
                            <option>Maresme</option>
                            <option>Prosperitat</option>
                            <option>Provençals de Poblenou</option>
                            <option>Sant Gervasi de Cassoles</option>
                            <option>Vila de Gracia</option>
                            <option>Vilapicina i la Torre LLobeta - Cotxeres</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Gènere </Form.Label>
                        <div className={"checkboxgenre"}>

                            <input type="checkbox" id="genrebox" className="genrebox" name="Home"
                                   value="Home"/>
                            <p>Home</p>
                            <input type="checkbox" id="genrebox" className="genrebox" name="Dona"
                                   value="Dona"/>
                            <p>Dona</p>
                            <input type="checkbox" id="genrebox" className="genrebox" name="NoBinari"
                                   value="NoBinari"/>
                            <p>No binari</p>
                            <input type="checkbox" id="genrebox" className="genrebox" name="Altres"
                                   value="Altres"/>
                            <p>Altres</p>

                        </div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Canal d'Atenció </Form.Label>
                        <Form.Select>
                            <option>Presencial Espai</option>
                            <option>Presencial Descentralizat</option>
                            <option>Telefónic</option>
                            <option>Correu Electrònic</option>
                            <option>Telemàtic</option>
                        </Form.Select>
                    </Form.Group>

                    <div className={"formEdatNaixement"}>
                        <Form.Group>
                            <Form.Label> Edat </Form.Label>
                            <Form.Select>
                                <option>-18 anys</option>
                                <option>De 18 a 24 anys</option>
                                <option>De 25 a 34 anys</option>
                                <option>De 35 a 44 anys</option>
                                <option>De 45 a 54 anys</option>
                                <option>De 55 a 64 anys</option>
                                <option>De 65 a 74 anys</option>
                                <option>De 75 a 84 anys</option>
                                <option>De 85 y més</option>
                                <option>NS/NC</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={"llocdenaixement"}> Lloc de naixement </Form.Label>
                            <Form.Select>
                                <option>Catalunya</option>
                                <option>Resta de l'Estat</option>
                                <option>Unión Europea</option>
                                <option>Resta d'Europa</option>
                                <option>Asia</option>
                                <option>Àfrica del Nord</option>
                                <option>Resta d'Àfrica</option>
                                <option>América del Sud i Central</option>
                                <option>América del Nord</option>
                                <option>Oceania</option>
                                <option>NS/NC</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Form.Label> Àmbits Temàtiques </Form.Label>
                        <div className={"checkboxAmbit"}>
                            <input type="checkbox" id="ambitbox" className="ambitbox" name="AmbitTem" value="AmbitTem"/>
                            <p>Pendent de desenvolupar</p>
                        </div>
                    </Form.Group>

                </div>


                <div className={"columna2"}>

                    <div className={"columna2-items"}>
                        <Form.Group className="grupo1">
                            <Form.Label> Consulta de títol: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option> Professional de les cures i de la llar</option>
                                <option> Persona cuidadora familiar</option>
                                <option> Persona receptora de cures</option>
                                <option> Professional d'altres serveis públics</option>
                                <option> Entitat, empresa o organització</option>
                                <option> Altres</option>
                                <option> NS / NC</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="grupo2">
                            <Form.Label> Motiu cures o suport: </Form.Label>
                            <Form.Select>
                                <option></option>
                                <option>Edat: petita infància</option>
                                <option>Edat: procés d'envelliment</option>
                                <option>Malaltia crònica</option>
                                <option>Diversitat funcional</option>
                                <option>Necessitats de cura puntuals (accident o malaltia)</option>
                                <option>Altres</option>
                                <option>NS/NC</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="grupo3">
                            <Form.Label> Situació Jurídica: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option>Nacionalitat espanyola</option>
                                <option>Autorització de residència i treball</option>
                                <option>Autorització de residència sense treball</option>
                                <option>Residència per estudis</option>
                                <option>Sense papers</option>
                                <option>Altres</option>
                                <option>NS/NC</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="grupo4">
                            <Form.Label> Serveis i Tràmits: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option>Informació</option>
                                <option>Orientació</option>
                                <option>Assessorament especialitzat</option>
                                <option>Tramitació</option>
                                <option>Dinamització de la informació</option>
                                <option>Estada a l'espai VilaVeïna</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="grupo5">
                            <Form.Label> Nivell d'estudis: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option>No sap llegir ni esciure
                                </option>
                                <option>Primària incompleta
                                </option>
                                <option>Primària completa
                                </option>
                                <option>Secundaria o grau mig de formació professional
                                </option>
                                <option>Estudis superiors
                                </option>
                                <option>NS/NC
                                </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="grupo6">
                            <Form.Label> Situació Laboral: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option>Treball a temps parcial
                                </option>
                                <option>Treball a temps complet
                                </option>
                                <option>Estudiant
                                </option>
                                <option>Tasques d'habitatge
                                </option>
                                <option>Pensionista
                                </option>
                                <option>Aturat/da
                                </option>
                                <option>Incapacitat permanent
                                </option>
                                <option>Inactiu per altres mot
                                </option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="grupo7">
                            <Form.Label> Com ens ha conegut: </Form.Label>
                            <br/>
                            <Form.Select>
                                <option></option>
                                <option>Boca-orella</option>
                                <option>Web</option>
                                <option>Xarxes socials</option>
                                <option>Cartells publicitaris</option>
                                <option>Ve derivat d'un altre servei</option>
                                <option>Accions de dinamització</option>
                                <option>Altre VilaVeïna</option>
                                <option>Premsa</option>
                                <option>Altres</option>
                                <option>NS/NC</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <Button className={"submitpoll"} type="submit" variant="success">
                        ENVIAR ENQUESTA
                    </Button>

                </div>
            </Form>
        </div>

    )
}