import React from 'react';
import Logo from './../../assets/images/villainousLogoWhite.png'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {

    return (


        <footer >
            <Link to={"/sources"}>
                View Sources
            </Link>

        </footer>


    );
}




export default Footer;
