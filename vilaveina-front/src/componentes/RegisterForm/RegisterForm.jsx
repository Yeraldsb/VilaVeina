import React from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";
import {useHistory} from "react-router-dom";




export const RegisterForm = () => {
    const history = useHistory();

    function handleonSubmit(e) {
        e.preventDefault();
        alert("Hem rebut la seva enquesta");
        history.push("/");
    }

    return (

        <div className={"registerForm"}>
            <h3>Alta Enquestadores</h3>
            <div className={"columnpile"} onSubmit={handleonSubmit}>

                <div className={"columna-1"}>
                    <label>Nom</label>
                    <input type="text"  className="register-name"  required />
                    <label>Adreça</label>
                    <input type="text"  className="register-address"  required />
                    <label>Correu Electrònic</label>
                    <input type="text"  className="register-email"  required />
                    <label>Usuari</label>
                    <input type="text"  className="register-email"  required />
                </div>

                <div className={"columna-2"}>
                    <label>Cognom</label>
                    <input type="text"  className="register-surname"  required />
                    <Form.Group>
                        <Form.Label> Vila Veïna : </Form.Label>
                        <div className={"formselect"}>
                        <Form.Select>
                            <option></option>
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
                        </div>
                    </Form.Group>
                    <label>Telèfon</label>
                    <input type="text"  className="register-phone"  required />
                    <label>Contrasenya</label>
                    <input type="password"  className="register-phone"  required />
                </div>
            </div>

            <button className={"button-save"} type="submit" > GUARDAR </button>

        </div>


    )
}

