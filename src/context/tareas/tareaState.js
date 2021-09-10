import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA

} from '../../types';

const TareaState = (props) => {
  //Siempre agregar un state inicial
    const initialState = {
        tareas: [
            { nombre: "Comer", estado: true, proyectoId: 1},
            { nombre: "dormir", estado: false, proyectoId: 2},
            { nombre: "kgar", estado: true, proyectoId: 3},
            { nombre: "Comer", estado: true, proyectoId: 1},
            { nombre: "dormir", estado: false, proyectoId: 2},
            { nombre: "kgar", estado: true, proyectoId: 3},
            { nombre: "Comer", estado: true, proyectoId: 1},
            { nombre: "dormir", estado: false, proyectoId: 2},
            { nombre: "kgar", estado: true, proyectoId: 3},
            { nombre: "Comer", estado: true, proyectoId: 1},
            { nombre: "dormir", estado: false, proyectoId: 2},
            { nombre: "kgar", estado: true, proyectoId: 4},
        ],
        tareasProyecto: null,
        errortarea: false,
    };
    // Crear el dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);
    // Crear las funciones


    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    //valida y muestra un erro en caso sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
        

    }

    return (
        <TareaContext.Provider
            value= {{ 
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errortarea: state.errortarea,   
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children} 
        </TareaContext.Provider>
        )
};

export default TareaState;
