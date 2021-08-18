import { useState } from 'react';
import './Header.css';
import logo from './logo.svg';
import { RiSearchLine, RiHome2Line, RiNotification2Line, RiLogoutBoxRLine } from "react-icons/ri";
import { BsGear } from "react-icons/bs";


function Header (){
    const [show, setShow] = useState(false);
    return ( 
    <div className= "header">
        <div class= "superior" >
            <a href= "logo" className="logo icono"> <img src={logo} /> </a>
            <a href= "busqueda" className="header-menu" > 
                <RiSearchLine className="icono"/> 
            </a>
        </div>

        <div className= "inferior" >
            <a href="home" className="header-menu"> 
                <RiHome2Line className="icono"/> 
            </a>

            <a href="notificaciones" className="header-menu"> 
                <RiNotification2Line className="icono"/> 
            </a>
            
            <a className="header-menu"> 
                <div className="avatar" onClick={() => setShow ((show) => !show)}> 
                    <img src="https://via.placeholder.com/30"/> 
                </div> 
                {show && (
                <div className="avatar-menu"> 
                    <div className="user"> 
                    <span><b>Doctor House</b> </span> <br/>
                    <span className="userName" > @DoctorHouse</span> 
                    </div>
                    <a href="configuracion" className="userMenu"> 
                        <BsGear className="icono"/> Configuración 
                    </a>

                    <a href="cerrarSesion" className="userMenu"> 
                        <RiLogoutBoxRLine className="icono"/> Cerrar Sesión 
                    </a>
                </div>
                )}
            </a>
            
        </div>
    </div>);
}
export default Header;


