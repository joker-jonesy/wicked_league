import React from 'react';
import Bar from "./Bar";

function Chart(props) {


    const dataMap = {
        matchups: props.mtch
    };

    const bars = dataMap.matchups.map((vl, idx) =>
        <Bar dt={vl} key={idx}/>
    );

    return (
        <div className={"graphWrap"}>
            <div className={"displayRatio"}>
                <h3>Wins</h3>
                <h3>Losses</h3>
            </div>
            {bars}
        </div>

    )

}

export default Chart;