import React from 'react';
import PlayerSelect from "./PlayerSelect";
import Players from "../../data/PlayerData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function PlayerHold() {

    const [players] = React.useState(Players);

    const playerMap = players.map((ply, idx) =>
        <PlayerSelect key={idx} ply={ply.title} />
    );

    return (
        <div className={"wrapItUp"}>
            <h1>Select a Player to learn about their statistics!</h1>
            <div className={"villainSelectorWrap"}>
              {playerMap}
            </div>
            <Link className={"returner"} to={"/"}>Return Home <FontAwesomeIcon icon={"undo-alt"}/></Link>
        </div>
    );
}

export default PlayerHold;