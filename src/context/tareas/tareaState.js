import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {v4 as uuidv4} from 'uuid';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA

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
        tareaselecionada: null
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
        tarea.id = uuidv4();
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

    //CAMBIA EL ESTADO DE CADA TAREA
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    // Edita o modifica una tarea 
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    // Limpiar tarea selecionada
    const limpiarTareaActual = () =>{
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value= {{ 
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errortarea: state.errortarea,   
                tareaselecionada: state.tareaselecionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTareaActual 
            }}
        >
            {props.children} 
        </TareaContext.Provider>
        )
};

export default TareaState;
