import React from 'react';
import {Link} from 'react-router-dom';

function VilSelect(props){

    return(
        <Link to={"/villain/"+props.vl} className={"villainSelector"} style={{backgroundColor:props.color}}>
            <img alt={props.vl+"Profile"} src={`./../../../assets/profiles/${props.vl}.jpg`}/>
        </Link>
    );
}

export default VilSelect;