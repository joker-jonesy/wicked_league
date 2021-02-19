import React from 'react';
import {VictoryPie} from "victory";
import Players from "../../data/PlayerData";
import GraphicSelect from "./GraphicSelect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Player(props) {

    const StringReplace = (str, rpl) => {
        return str.replace(/-/g, rpl);
    };

    let Player = Players.find(ply=>ply.title===props.match.params.id);

    const data = [{type:"Wins", value: Player.gWins},{type:"Losses", value: Player.gLosses}];

    const hexToRgbA =(hex)=>{
        let c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length=== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.25)';
        }
    };


    return (
        <div className={"villainWrap"}>
            <div className={"statBox"}>
                <div className={"imgCover"}>
                    <div className={"profile"}>
                        <FontAwesomeIcon icon={"user"}/>
                    </div>
                </div>
                <h1>{StringReplace(Player.title, " ")}</h1>

                <div className={"statBlock full"}>
                    <h4 className={"chartTitle"}>{Player.gWins+Player.gLosses} Total games Played</h4>
                    <VictoryPie height={350} data={data} labels={({ datum }) => `${datum.value+" "+datum.type} `} x={"type"} y={"value"} colorScale={["#095E16", hexToRgbA("#095E16")]}/>
                </div>

            </div>

            <GraphicSelect mtch={Player.matchUps}/>

        </div>
    );
}

export default Player;