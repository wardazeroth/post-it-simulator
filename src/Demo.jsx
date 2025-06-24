import { useState } from "react";
import Nota from "./Nota";
import Formulario from "./Formulario";


export default function Demo() {

    const [arrNotas, setArrNotas] = useState([]);
    const agregarNota = (nuevo) => {
        setArrNotas([...arrNotas, nuevo])

    }
    return (
        <div className="container my-5">
            <h2>Post It Simulator!</h2>
            <Formulario agregar={agregarNota}></Formulario>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {
                    arrNotas.map((nota, index) => (
                        <div className="col" key={index}>
                            <Nota
                                titulo= {nota.titulo}
                                descripcion= {nota.descripcion}
                                prioridad = {nota.prioridad}
                            ></Nota>
                        </div>
                    ))

                }

            </div>

        </div>
    )
}