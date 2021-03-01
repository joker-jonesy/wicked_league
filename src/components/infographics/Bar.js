import React from 'react';
import VilSelect from "../selector/VillainSelect";
import Villains from "../../data/VIllainData";

function Bar(props){

    const color = Villains.find(vl => vl.title===props.dt.title).fill;

    return(
        <div className={"barHold"}>
            <VilSelect vl={props.dt.title}/>
            <div className={"bar"}>
                <div className={"barFill barFillWinners"} style={{width:((props.dt.wins/(props.dt.wins+props.dt.losses))*100)+"%" }}>
                    <div className={"winnerFill"} style={{backgroundColor:color}}></div>
                </div>
                <div className={"barText barTextWinners"}>
                    <h4>{props.dt.wins} W</h4>
                </div>

                <div className={"barFill barFillLosers"} style={{ width:(props.dt.losses/(props.dt.wins+props.dt.losses))*100+"%" }}>

                </div>
                <div className={"barText barTextLosers"}>
                    <h4>{props.dt.losses} L</h4>
                </div>
            </div>
        </div>
    )
}

export default Bar;