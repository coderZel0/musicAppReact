import React, { useEffect } from "react";
import img from "../images/default.png";
import './Details.css';

const Details = ({index,songs,play})=>{

    const {title,image,artist} = songs[index];
    useEffect(()=>{
        console.log(play)
    },[])
    return (
        <div className="details">
            <div className={`image ${(play)?"anima":''}`}>
                <img src={img}></img>
            </div>
            <div className="title">
                <h3><strong>{title}</strong></h3>
            </div>
            <div className="artist">
                {artist}
            </div>
        </div>
    )
}

export default Details;