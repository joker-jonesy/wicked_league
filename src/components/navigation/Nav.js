import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from './../../assets/images/villainousLogoWhite.png'
import {Link, useHistory} from "react-router-dom";
import Villains from "../../data/VIllainData";

function Nav() {

    //redux state goes here

    // const dispatch = useDispatch();

    let VillainPage=false;

    let goHome;

    const history = useHistory();

    React.useEffect(()=>{

        return history.listen((location) => {
            for(let i=0; i< Villains.length; i++){
                if (window.location.href.indexOf(Villains[i].title) > -1) {
                    VillainPage=true;
                }else{
                    VillainPage=false;
                }
            }
        });


    },[history]);

    if(VillainPage){
        goHome=<Link to={"/"} className={"ham"} >

            <FontAwesomeIcon icon='undo' size="3x" />

        </Link>
    }







    return (


        <nav >
            <Link to={"/"} className={"logo"} >
                <img src={Logo} alt={"Villainous_Logo"}/>
            </Link>
            {goHome}

        </nav>


    );
}




export default Nav;
