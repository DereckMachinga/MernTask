import React,{Fragment,useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareacontext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTarea = () => {
    //Extraer proyectos de state incial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;
    // Obtener las tareas del proyecto
    const tareasContext = useContext(tareacontext);
    const  { tareasProyecto } = tareasContext;
    if(!proyecto) return <h2>Selecciona un proyecto</h2>
    //Extraer el proyecto actual de proyecto
    const [ proyectoActual ] = proyecto;
    
    const onclickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                        <TransitionGroup>
                            {
                                tareasProyecto.map(tarea =>(
                                    <CSSTransition
                                        key = {tarea.id}
                                        timeout= {200}
                                        classNames="tarea"
                                    >
                                        <Tarea 
                                            tarea={tarea}
                                        />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    
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



