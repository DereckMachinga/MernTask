import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
const FormTarea = () => {
    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;
    //Extraer el context para tareas
    const tareasContext = useContext(tareaContext);
    const {tareaselecionada, errortarea ,agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTareaActual} = tareasContext;
    
    // Effect que detecta si hay una tarea selecionada
    useEffect(()=> {
        if(tareaselecionada !== null) {
            guardarTarea(tareaselecionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaselecionada])
    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });
    //Extraer el nombre del proyecto del formulario
    const {nombre } = tarea;
    //si no hay un proyecto selecionado
    if(!proyecto) return null;
    //Array para extraer el proyectoActual
    const [proyectoActual] = proyecto;
    //Leer los valores del formulario
    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        //validarFormulario
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //Si es edicion o si es una tarea nueva
        if(tareaselecionada === null){
            //Agregar la tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else {
            // actualizar tarea existente
            actualizarTarea(tarea);
            // Elimina la tarea seleccionada del state
            limpiarTareaActual();
        }
        

        // Obtener y filtrar las tareas del proyecto actual 
        obtenerTareas(proyectoActual.id);
        //reiniciar el formulario 
        guardarTarea({
            nombre: '',
        })
    }
    return ( 
        <div className="formulario">
            <form
                onSubmit= {onSubmit}
            >
                <div className="contenedor-input">
                    <input type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value ={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input type="submit" 
                        className="btn btn-primario btn-block btn-submit"
                        value={tareaselecionada 
                        ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>  : null}

        </div>
    );
}

export default FormTarea;