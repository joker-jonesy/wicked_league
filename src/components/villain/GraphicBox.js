import React from 'react';
import Chart from "../infographics/Chart";

function GraphicBox(props) {


    return (
        <div className={"graphicBox"}>

            <div className={"graphics"}>
                <h1>Match Ups</h1>
                <Chart wins={props.vil.wins} losses={props.vil.losses} winning={true} mtch={props.vil.matchUps}/>
            </div>

        </div>
    );
}

export default GraphicBox;