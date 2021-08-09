import React,{Fragment,useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoTarea = () => {
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;
    if(!proyecto) return <h2>Selecciona un proyecto</h2>
    //Extraer el proyecto actual de proyecto
    const [ proyectoActual ] = proyecto;
    const tareasProyecto = [
        { nombre: 'Comer', estado: true},
        { nombre: 'dormir', estado: false},
        { nombre: 'kgar', estado: true}
    ];
    const onclickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea =>(
                        <Tarea tarea={tarea}/>
                    ))
                }
                <button type="button"
                    className="btn btn-eliminar"
                    onClick={onclickEliminar}
                >
                    Eliminar Proyecto &times;
                </button>
            </ul>
        </Fragment>
    );
}

export default ListadoTarea;