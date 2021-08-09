import React,{Fragment, useContext, useState} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {
    //Obtener el state del fomulario
    const proyectosContext = useContext(proyectoContext);
    //Extraer el formulario de proyectoscontext
    const { formulario, errorformulario ,mostrarFormulario, agregarProyecto, mostrarErrores } = proyectosContext;
    //Stte para el proyectos
    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });
    //Extraer nombre del proeycto
    const { nombre } = proyecto;
    //Onchange del input

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    //Onsubmit del formulario
    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar el proyecto del formulario
        if(nombre ==='') {
            mostrarErrores();
            return;
        }
        //agregar al state del formulario
        agregarProyecto(proyecto);
        
        //limpiar formulario
        guardarProyecto({
            nombre: ''
        })
    }
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            > Nuevo Proyecto</button>
            {formulario
                ? 
                    (
                        <form 
                            className="formulario-nuevo-proyecto"
                            onSubmit = {onSubmitProyecto}
                        >
                            <input 
                                type = "text"
                                className = "input-text"
                                placeholder = "Nuevo Proyecto"
                                name = "nombre"
                                value = {nombre}
                                onChange = {onChangeProyecto}
                            />
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block" 
                                value="Agregar Proyecto"
                            />
                        </form>
                    )
                : null
            }
            { errorformulario ? <p className="mensaje error">El nombre es obligatorio</p> : null}
        </Fragment>
    );
}

export default NuevoProyecto;