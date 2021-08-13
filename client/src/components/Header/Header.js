import './Header.css';
import logo from './logo.svg';
import { RiSearchLine, RiHome2Line, RiNotification2Line } from "react-icons/ri";

function Header (){
    return ( <div className= "header">
        <div class= "superior" >
            <a href="logo" className="logo iconos"> <img src={logo} /> </a>
            <a href="busqueda" className="iconos" > <RiSearchLine/> </a>
        </div>

        <div className= "inferior" >
            <a href="home" className="iconos"> <RiHome2Line/> </a>
            <a href="notificaciones" className="iconos"> <RiNotification2Line/> </a>
            <a href="foto" className="iconos"> 
                <div className="foto"> 
                    <img src="https://via.placeholder.com/200"/> 
                </div> 
            </a>
        </div>
    </div>);
}

export default Header;
