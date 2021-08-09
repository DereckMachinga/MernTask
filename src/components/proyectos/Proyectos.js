import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTarea from '../tareas/ListadoTarea';
const Proyectos = () => {
    return ( 
        
            <div className="contenedor-app">
                <Sidebar/>
                
                <div className="seccion-principal">
                    <Header />
                    <main>
                            <FormTarea />
                        <div className="contenedor-tareas">
                            <ListadoTarea/>
                        </div>
                    </main>
                </div>
            </div>
        
    );
}

export default Proyectos;