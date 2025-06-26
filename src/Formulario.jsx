import { useState } from "react"

export default function Formulario ({agregar}) {
    const [notas, setNotas] = useState([]);
    const [marcado, setMarcado] = useState(false);
    const enviar = (event) => {
        event.preventDefault()

        const titulo = document.getElementById('titulo').value
        const descripcion = document.getElementById('descripcion').value
        const prioridad = marcado

        let nuevo = {
                titulo: titulo,
                descripcion: descripcion,
                prioridad: prioridad
        }

        if (notas.find(n => n.titulo === titulo && titulo != '')) {
            alert('Ya agregó esta nota')
        }else if (titulo.length > 34) {
            alert('El título es demasiado largo')
        }else if (descripcion.length > 66) {
            alert('La descripción es demasiado larga')
        // }else if (descripcion == '') {
        //     alert('Debe agregar una descripción')
        } else {
            agregar(nuevo);
            setNotas([...notas, nuevo])
            console.log(notas)
        }



    } 

    return (
        <form onSubmit={enviar}>
            <div className="row g-4 my-4 formulario">
                <div className="col-12 col-md-6 col-lg-3 my-3">
                    <label className="form-label" htmlFor="titulo"></label>
                    <input className="form-control" id="titulo" type="text" placeholder="Título" />
                </div>

                <div className="col-12 col-md-6 col-lg-4 my-3">
                    <label className="form-label" htmlFor="descripcion"></label>
                    <input className="form-control" id="descripcion" type="text" placeholder="Descripción" required />
                </div>

                <div className="col-12 col-md-6 col-lg-2">
                    <input className="form-check-input" type="checkbox" checked={marcado} onChange={(e) => setMarcado(e.target.checked)} id="check" />
                    <label className="form-check-label text-light ms-2" htmlFor="check">¡Importante!</label>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <button className="btn btn-dark">AGREGAR</button>
                </div>
            </div>
        </form>
    )
};
