import React from 'react';
import Chart from "../infographics/Chart";
import Villains from "../../data/VIllainData";

function GraphicSelect(props) {

    const [vil,selectVil]=React.useState(Villains[0].title);

    let playedVillains=[];

    for(let i =0; i< props.mtch.length; i++){
        var total=0;
        for(let ii =0; ii< props.mtch[i].games.length; ii++){
            total=total+props.mtch[i].games[ii].wins+props.mtch[i].games[ii].losses
        }
        if(total!==0){
            playedVillains.push(props.mtch[i])
        }
    }

    let curVil = props.mtch.find(vl=> vl.title===vil);

    const returnOpac=(title)=>{
        if(title===vil){
            return{
                opacity: 1
            }
        }else{
            return{
                opacity: 0.5
            }
        }
    };

    const vilSel = playedVillains.map((vl,idx)=>
        <div onClick={()=>selectVil(vl.title)} key={idx} className={"slc"} style={{backgroundColor:vl.fill}}>
            <img style={returnOpac(vl.title)} alt={vl.title+"Profile"} src={`./../../../assets/profiles/${vl.title}.jpg`}/>
        </div>
    );


    return (
        <div className={"graphicBox"}>

            <div className={"graphics"}>
                <h1>Match Ups</h1>
                <div className={"graphSelector"}>
                    {vilSel}
                </div>
                <Chart mtch={curVil.games}/>
            </div>

        </div>
    );
}

export default GraphicSelect;