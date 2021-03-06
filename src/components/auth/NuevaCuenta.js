import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;
    //State Para iniciar Sesion
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    //Extraer de usuario 
    const { nombre, email, password , confirmar} = usuario;
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }
    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos vacios
        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //Password minimo de 6 caracteres
        if( password.length < 6 ){
            mostrarAlerta('El password debe de ser mayor a 6', 'alerta-error');
            return;
        }
        //2 password sean iguales
        if (password !== confirmar){
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }
        //Pasarlo al action 
        
    } 
    
    return ( 
        <div className="form-usuario">
            { alerta ? 
                (
                    <div className={`alerta ${alerta.categoria}`}>
                        { alerta.msg }
                    </div>
                )
            : 
                null
            }
            <div className=" contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={onChange} 
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange} 
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange} 
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            onChange={onChange} 
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                    </div>
                </form>
                <Link to= {'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>

    );
}

export default NuevaCuenta;