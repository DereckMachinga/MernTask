import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListadoProyectos = () => {
    //Extraer proyectos de state inicil
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;
    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);
    //validar si hay un proyecto 
    if(proyectos.length === 0) return <p>No hay proyecto, comienza agregando uno.</p>;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto =>(
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />   
                    </CSSTransition>
                    ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;