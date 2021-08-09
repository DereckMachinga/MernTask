import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    //Extraer proyectos de state inicil
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;
    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);
    //validar si hay un proyecto 
    if(proyectos.length === 0) return <p>No hay proyecto, comienza agregando uno.</p>;

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;