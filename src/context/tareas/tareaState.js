import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA

} from '../../types';

const TareaState = (props) => {
  //Siempre agregar un state inicial
    const initialState = {
        tareas: [
            {id: 1 ,nombre: "Comer", estado: true, proyectoId: 1},
            {id: 2 ,nombre: "dormir", estado: false, proyectoId: 2},
            {id: 3 ,nombre: "kgar", estado: true, proyectoId: 3},
            {id: 4 ,nombre: "Comer", estado: true, proyectoId: 1},
            {id: 5 ,nombre: "dormir", estado: false, proyectoId: 2},
            {id: 6 ,nombre: "kgar", estado: true, proyectoId: 3},
            {id: 7 ,nombre: "Comer", estado: true, proyectoId: 1},
            {id: 8 ,nombre: "dormir", estado: false, proyectoId: 2},
            {id: 8 ,nombre: "kgar", estado: true, proyectoId: 3},
            {id: 10 ,nombre: "Comer", estado: true, proyectoId: 1},
            {id: 11 ,nombre: "dormir", estado: false, proyectoId: 2},
            {id: 12 ,nombre: "kgar", estado: true, proyectoId: 4},
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
    //Eliminar tarea por Id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
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
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children} 
        </TareaContext.Provider>
        )
};

export default TareaState;
