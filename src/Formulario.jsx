import { useState } from "react"

export default function Formulario ({agregar}) {
    const [notas, setNotas] = useState([]);
    const [marcado, setMarcado] = useState(false);
    const enviar = (event) => {
        event.preventDefault()

        const titulo = document.getElementById('titulo').value
        const descripcion = document.getElementById('descripcion').value
        const prioridad = marcado

        const nuevo = {
            titulo: titulo,
            descripcion: descripcion,
            prioridad: prioridad
        };

        agregar(nuevo);
        setNotas([...notas, nuevo])
        console.log(notas)

    } 

    return (
        <form onSubmit={enviar}>
            <div className="row g-4 my-4">
                <div className="col-md-3">
                    <label className="form-label" htmlFor="titulo">Título</label>
                    <input className="form-control" id="titulo" type="text" placeholder="Título" required />
                </div>

                <div className="col-md-3">
                    <label className="form-label" htmlFor="descripcion">Descripción</label>
                    <input className="form-control" id="descripcion" type="text" placeholder="Descripción" required />
                </div>

                <div className="col-md-3">
                    <input className="form-check-input" type="checkbox" checked={marcado} onChange={(e) => setMarcado(e.target.checked)} id="check" />
                    <label className="form-check-label" htmlFor="check">Importante!</label>
                </div>

                <div className="col-md- my-3">
                    <button className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
    )
};
