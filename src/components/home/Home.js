import React from 'react';
import {Link} from "react-router-dom";
import vilWhite from './../../assets/icons/vilWhite.png'
import vilBlack from './../../assets/icons/vilBlack.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(){

    const [hover,setHover]=React.useState(false);

    return(
        <div className={"home"}>
            <h1>Welcome to the Disney Villainous Wicked League</h1>
            <p>Here, you can learn all about the players who play in the league, as well as see how well villains are performing overall.</p>
            <Link className={"linker"} to={"/villains"} onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}>
                <h1>Villains</h1>
                {hover?<img alt={"vilBlack"} src={vilBlack}/>:<img alt={"vilWhite"} src={vilWhite}/>}
            </Link>
            <Link className={"linker"} to={"/players"}>
                <h1>Players</h1>
                <FontAwesomeIcon icon={"user"}/>
            </Link>
        </div>
    )
}

export default Home;