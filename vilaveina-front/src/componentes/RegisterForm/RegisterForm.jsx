import React from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";




export const RegisterForm = () => {

    return (
        <div className={"registerForm"}>
            <div className={"columnpile"}>

                <div className={"columna1"}>
                    <label>Nom</label>
                    <input type="text"  className="register-name"  required />
                    <label>Adreça</label>
                    <input type="text"  className="register-address"  required />
                    <label>Correu Electrònic</label>
                    <input type="text"  className="register-email"  required />
                    <label>Usuari</label>
                    <input type="text"  className="register-email"  required />
                </div>

                <div className={"columna2"}>
                    <label>Cognom</label>
                    <input type="text"  className="register-surname"  required />
                    <Form.Group>
                        <Form.Label> Vila Veïna : </Form.Label>
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
                    </Form.Group>
                    <label>Telèfon</label>
                    <input type="text"  className="register-phone"  required />
                    <label>Contrasenya</label>
                    <input type="password"  className="register-phone"  required />
                </div>
            </div>

            <button className={"submitRegForm"} type="submit" > Guardar </button>

        </div>


    )
}

