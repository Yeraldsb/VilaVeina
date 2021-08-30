import React from 'react'
import "./estadisticas.css"
import green from '../img/listaVerde.png'
import orange from '../img/estadisticaNaranja.png'
import CustomDataPicker from "../Form/CustomDatePicker";

export default function Estadisticas() {
    return (
        <div className="containerestadisticas">
        <CustomDataPicker />
            <div className="containerbotones">
                <button className="botones"><img src={green} alt="" className="botonfiltro"/>Gènere</button>
                <button className="botones"><img src={green} alt="" className="botonfiltro"/>Edat</button>
                <button className="botones"><img src={orange} alt="" className="botonfiltro"/>Lloc naixement</button>
                <button className="botones"><img src={orange} alt="" className="botonfiltro"/>Enquestes realitzades</button>
                <button className="botones"><img src={orange} alt="" className="botonfiltro"/>Consulta a títol</button>
                <button className="botones"><img src={orange} alt="" className="botonfiltro"/>Cures /suport</button>
            </div>
            <div className="containergrafica">
                <p>aquí irá la gráfica</p>
            </div>
        </div>

            )
            }