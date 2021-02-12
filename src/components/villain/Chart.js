import React from 'react';
import Bar from "./Bar";

function Chart(props) {


    const dataMap = {
        matchups: props.mtch
    };

    const bars = dataMap.matchups.map((vl, idx) =>
        <Bar dt={vl} key={idx} wins={props.winning} total={{wins:props.wins, losses:props.losses}}/>
    )

    return (
        <div className={"graphWrap"}>
            {bars}
        </div>

    )

}

export default Chart;