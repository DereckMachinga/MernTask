import { props } from 'bluebird';
import React,{useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {v4 as uuidv4} from 'uuid';
import { FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTOS,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL, 
        ElIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {
    const proyectos = [
        { id: 1, nombre: 'Tienda virtual'},
        { id: 2, nombre: 'Tienda Mongol'},
        { id: 3, nombre: 'Tienda Tiendaps'},
        { id: 4, nombre: 'Tienda AEA'}
    ]
    const initialState = {
        proyectos: [
        ],
        formulario: false,
        errorformulario: false,
        proyecto: null,
    }
    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();
        //insetar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }
    //Validar el formulario por errores
    const mostrarErrores = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    //Selecciona el proyecto que el usuario dio click
    const proyectoActual= proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    //Eliminar el proyecto
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type: ElIMINAR_PROYECTO,
            payload: proyectoId
        })
    }
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarErrores,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>

    );

} 

export default ProyectoState;