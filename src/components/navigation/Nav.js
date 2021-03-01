import React from 'react';
import Logo from './../../assets/images/villainousLogoWhite.png'
import vilWhite from './../../assets/icons/vilWhite.png';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Nav() {

    return (


        <nav >
            <Link to={"/"} className={"logo"} >
                <img src={Logo} alt={"Villainous_Logo"}/>
            </Link>

            <div className={"ham"}>
                <Link to={"/villains"}>
                    <img alt={"Villainous_Logo"} src={vilWhite}/>
                </Link>
                <Link to={"/players"}>
                    <FontAwesomeIcon icon={"user"}/>
                </Link>
            </div>

        </nav>


    );
}




export default Nav;
