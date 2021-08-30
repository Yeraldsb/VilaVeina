import React, {useState} from 'react'
import "./estadisticas.css"
import edat from '../img/altaBaja.png'
import naixement from '../img/arbre.png'
import enquestes from '../img/xarxa.png'
import consulta from '../img/escales.png'
import suport from '../img/cor.png'
import genere from '../img/cures.png'
import StadisticsCalendar from "./StadisticsCalendar";



export default function Estadisticas() {
     const [datepick, setDatePick] = useState(new Date());

    return (
        <div className="bodyestadisticas">
            <div className="containerestadisticas">

                    <div className="containerbotones">
                        <div className="datapicker-estadisticas">
                            <StadisticsCalendar
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                selected={datepick}
                                onChange={(date) => setDatePick(date)}
                            />

                        </div>
                        <button className="botones" ><img src={genere} alt="" className="iconoboton"/>Gènere</button>
                        <button className="botones"><img src={edat} alt="" className="iconoboton"/>Edat</button>
                        <button className="botones"><img src={naixement} alt="" className="iconoboton"/>Lloc naixement</button>
                        <button className="botones"><img src={enquestes} alt="" className="iconoboton"/>Enquestes realitzades</button>
                        <button className="botones"><img src={consulta} alt="" className="iconoboton"/>Consulta a títol</button>
                        <button className="botones"><img src={suport} alt="" className="iconoboton"/>Cures /suport</button>
                    </div>
                         <div className="containergrafica">
                        <p>aquí irá la gráfica</p>
                         </div>
             </div>
        </div>

            )
            }