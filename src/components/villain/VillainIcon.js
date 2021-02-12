import React from 'react';


function VilIcon(props){
    return(
        <div className={"villainSelector"}>
            <img alt={props.vl+"Profile"} src={`./../../../assets/profiles/${props.vl}.jpg`}/>
        </div>
    )
}

export default VilIcon;