import React from 'react';
import GraphicBox from "./GraphicBox";
import {VictoryPie} from "victory";
import Villains from "../../data/VIllainData";

function Villain(props) {

    const StringReplace = (str, rpl) => {
        return str.replace(/-/g, rpl);
    };

    let Villain = Villains.find(vl=>vl.title===props.match.params.id);

    const data = [{type:"Wins", value: Villain.wins},{type:"Losses", value: Villain.losses}];

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
                    <img style={{"opacity":1}} alt={Villain.title + "Portrait"} src={`./../../../assets/portraits/${StringReplace(Villain.title, "_")}.png`}/>
                </div>
                <h1>{StringReplace(Villain.title, " ")}</h1>
                <h3>"{Villain.quote}"</h3>
                <div className={"statBlock full"}>
                    <h2>Objective</h2>
                    <p>{Villain.objective}</p>
                </div>

                <div className={"statBlock full"}>
                    <h4 className={"chartTitle"}>{Villain.wins+Villain.losses} Total games Played</h4>
                    <VictoryPie animate={{
                        duration: 1000
                    }} height={350} data={data} labels={({ datum }) => `${Math.floor(datum.value)+" "+datum.type} `} x={"type"} y={"value"} colorScale={[Villain.fill, hexToRgbA(Villain.fill)]}/>
                </div>

            </div>
            <GraphicBox vil={Villain}/>

        </div>
    );
}

export default Villain;