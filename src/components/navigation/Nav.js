import React from 'react';
import Logo from './../../assets/images/villainousLogoWhite.png'
import {Link} from "react-router-dom";


function Nav() {









    return (


        <nav >
            <Link to={"/"} className={"logo"} >
                <img src={Logo} alt={"Villainous_Logo"}/>
            </Link>

        </nav>


    );
}




export default Nav;
