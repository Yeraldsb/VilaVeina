import React from 'react'
import "./sideBarUser.css"
import vila from '../img/LogoVila.png'
import green from '../img/listaVerde.png'
import orange from '../img/estadisticaNaranja.png'
import {Footer} from "../footer/Footer";

export default function SideBarUser() {
    return (
        <div className="sidebar">
            <img src={vila} alt="" className="vila"/>
            <div className="containerButton">
                <button><img src={green} alt="" className="logoSidebar"/>Nova enquesta</button>
                <br/>
                <button><img src={orange} alt="" className="logoSidebar"/>Estadístiques</button>
            </div>
            <Footer/>
        </div>
    )
}
