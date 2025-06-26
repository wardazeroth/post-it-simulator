import { useEffect } from "react";

export default function Nota({titulo, descripcion, prioridad, eliminar, marcar}) {
    useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
    }, []);

    let fondo = ''
    if (prioridad) {
        fondo = 'card card-importante'
    } else {
        fondo= 'card card-normal'
    }
    
   let num = Math.floor(Math.random() * 15) - 7;
    return (
            <div className= {fondo} style={{transform:`rotate(${num}deg)`}}>
                    <div className="d-flex m-1"> 
                        <button type="button" onClick={(marcar)} className="btn btn-outline-primary" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="top" title="Cambia la prioridad de la actividad"><i className="bi bi-exclamation-circle-fill"></i></button>
                        <button type="button" onClick={(eliminar)} className="btn-close ms-auto" aria-label="Close" data-bs-toggle='tooltip' data-bs-placement="top" title="Elimina esta nota"></button>
                        
                    </div>
                <div className="card-body">                     
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
    )   
}


