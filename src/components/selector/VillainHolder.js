import React from 'react';
import VilSelect from "./VillainSelect";
import Villains from "../../data/VIllainData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function VilHold() {

    const [villains] = React.useState(Villains);

    const villainMap = villains.map((vl, idx) =>
        <VilSelect key={idx} vl={vl.title} color={vl.fill}/>
    );

    return (
        <div className={"wrapItUp"}>
            <h1>Select a Villain to learn about their statistics!</h1>
            <div className={"villainSelectorWrap"}>
              {villainMap}
            </div>
            <Link className={"returner"} to={"/"}>Return Home <FontAwesomeIcon icon={"undo-alt"}/></Link>

        </div>
    );
}

export default VilHold;