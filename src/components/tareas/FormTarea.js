import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
const FormTarea = () => {
    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;
    //si no hay un proyecto selecionado
    if(!proyecto) return null;
    //Array para extraer el proyectoActual
    const [proyectoActual] = proyecto;
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input type="submit" 
                        className="btn btn-primario btn-block btn-submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;