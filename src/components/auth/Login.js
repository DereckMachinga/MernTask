import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    //State Para iniciar Sesion
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: '',
    });
    //Extraer de usuario 
    const { email, password } = usuario;
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }
    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        //Validar que no este vacio

        //Enviar al accion
    } 
    
    return ( 
        <div className="form-usuario">
            <div className=" contenedor-form sombra-dark">
                <h1>Iniciar Session</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                    </div>
                </form>
                <Link to= {'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener una cuenta
                </Link>
            </div>
        </div>

    );
}

export default Login;