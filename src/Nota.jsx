export default function Nota({titulo, descripcion, prioridad}) {
    let fondo = ''
    
    if (prioridad) {
        fondo = 'card card-importante'
    } else {
        fondo= 'card card-normal'
    }
    
    return (
            <div className= {fondo}>
                <div className="card-body d-flex">
                    <button type="button" className="btn-close ms-auto" aria-label="Close"></button>
                </div>
                <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                
                <p className="card-text">{descripcion}</p>
                </div>
            </div>
    )
}