import React from "react";
import "./RegisterForm.css";




export const RegisterForm = () => {

    return (
        <div className={"regitroFormdiv"}>
            <div className={"nameImput"}>
                <label>Nom</label>
                <input type="text"  className="registName"  required />
                <label>Cognom</label>
                <input type="text"  className="registCognom"  required />
            </div>
            <label>Adreça</label>
            <input type="text"  className="registAdreça"  required />

    <div className={"nameCorreu"}>
        <label>Correu Electrònic</label>
        <input type="text"  className="registCorreu"  required />
        <label>Telèfon</label>
        <input type="text"  className="registTel"  required />
    </div>
            <button className={"submitRegForm"} type="submit" >Guardar</button>

        </div>


    )
}