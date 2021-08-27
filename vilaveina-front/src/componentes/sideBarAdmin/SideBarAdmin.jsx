import * as React from 'react';
import "./sideBarAdmin.css"
import vila from "../img/LogoVila.png";
import green from "../img/listaVerde.png";
import orange from "../img/estadisticaNaranja.png";
import {Footer} from "../footer/Footer";
import altaBaja from "../img/altaBaja.png";

export default function SideBarAdmin() {
    return (
        <div className="sidebar">
            <img src={vila} alt="" className="vila"/>
            <div className="containerButton">
                <button><img src={green} alt="" className="logoSidebar"/>Nova enquesta</button>
                <br/>
                <button><img src={orange} alt="" className="logoSidebar"/>Estadístiques</button>
                <br/>
                <button><img src={altaBaja} alt="" className="logoSidebar"/>Alta/Baixa Usuaris</button>
                <button className="button-logout">Sortir</button>
            </div>
            <Footer/>
        </div>
    )
}