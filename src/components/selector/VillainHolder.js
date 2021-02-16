import React from 'react';
import VilSelect from "./VillainSelect";
import Villains from "../../data/VIllainData";

function VilHold() {

    const [villains] = React.useState(Villains);

    const villainMap = villains.map((vl, idx) =>
        <VilSelect key={idx} vl={vl.title} color={vl.fill}/>
    );

    return (
        <span>
            <h1>Select a Villain to learn about their statistics!</h1>
            <div className={"villainSelectorWrap"}>
              {villainMap}
            </div>
        </span>
    );
}

export default VilHold;