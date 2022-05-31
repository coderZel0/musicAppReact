import React, { useEffect } from "react";
import img from "../images/default.png";
import './Details.css';

const Details = ({index,songs,play,lyrics,activeLyrics})=>{

    const {title,artist} = songs[index];
    useEffect(()=>{
        if(!activeLyrics) return;
        const Length = lyrics.length;
    },[])
    return (
        <div className="details">
            <div className={`lyrics-layer ${(activeLyrics)?'':'show'}`}>
                <div className="lyrics">
                    <p>{lyrics}</p>
                </div>
            </div>
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