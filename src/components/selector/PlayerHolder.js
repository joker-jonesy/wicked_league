import React from 'react';
import PlayerSelect from "./PlayerSelect";
import Players from "../../data/PlayerData";

function PlayerHold() {

    const [players] = React.useState(Players);

    const playerMap = players.map((ply, idx) =>
        <PlayerSelect key={idx} ply={ply.title} />
    );

    return (
        <span>
            <h1>Select a Player to learn about their statistics!</h1>
            <div className={"villainSelectorWrap"}>
              {playerMap}
            </div>
        </span>
    );
}

export default PlayerHold;