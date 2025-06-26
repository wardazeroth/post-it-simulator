import { useEffect, useState } from "react";
import Nota from "./Nota";
import Formulario from "./Formulario";


export default function Demo() {
    
    const notas = []

    const [arrNotas, setArrNotas] = useState(() => {
        return JSON.parse(localStorage.getItem('notas')) || notas
    });

    useEffect(() => {
        localStorage.setItem('notas', JSON.stringify(arrNotas));  
    }, [arrNotas]);



    const agregarNota = (nuevo) => {
        setArrNotas([...arrNotas, nuevo])
    }

    return (
<div className="container my-5">
    <h1>Post It Simulator!</h1>
    <Formulario agregar={agregarNota} />

    <div className="d-flex flex-wrap justify-content-center gap-4">
        {
            arrNotas.map((nota, index) => (
                <div key={index} className="tarjetas">
                    <Nota
                        titulo={nota.titulo}
                        descripcion={nota.descripcion}
                        prioridad={nota.prioridad}
                        eliminar={(event) => {
                            event.preventDefault();
                            const confirmacion = confirm('¿Está seguro que desea eliminar esta nota?');
                            if (confirmacion) {
                                setArrNotas(arrNotas.filter((_, i) => i !== index));
                            }
                        }}
                        marcar={() => {
                            setArrNotas(arrNotas.map((nota, i) => {
                                if (i === index) {
                                    return { ...nota, prioridad: !nota.prioridad };
                                }
                                return nota;
                            }));
                        }}
                    />
                </div>
            ))
        }
        </div>
    </div>
    )
}