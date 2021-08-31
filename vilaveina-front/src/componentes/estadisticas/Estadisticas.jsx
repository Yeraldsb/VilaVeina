import React, {useState} from 'react'
import "./estadisticas.css"
import edat from '../img/altaBaja.png'
import naixement from '../img/arbre.png'
import enquestes from '../img/xarxa.png'
import consulta from '../img/escales.png'
import suport from '../img/cor.png'
import genere from '../img/cures.png'
import DatePicker from "react-datepicker";




export default function Estadisticas() {

    const [startDate, setStartDate] = useState(new Date ("2021/08/31"));
    const [endDate, setEndDate] = useState (new Date ("2021/08/31"));

    return (
        <div className="bodyestadisticas">

            <div className="containerestadisticas">


                    <div className="containerbotones">
                        <div className={"rangedatepicker"}>
                            <div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </div>
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