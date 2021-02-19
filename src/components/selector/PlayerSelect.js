import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PlayerSelect(props){

    return(
        <Link to={"/player/"+props.ply} className={"playerSelector"}>
            <div className={"playerSelect"}>
                <FontAwesomeIcon icon={"user"}/>
            </div>
            <h1>{props.ply}</h1>
        </Link>
    );
}

export default PlayerSelect;