import React, { useEffect } from "react";
import img from "../images/default.png";
import './Details.css';

const Details = ({index,songs,play,lyrics,acticeLyrics})=>{

    const {title,artist} = songs[index];
    useEffect(()=>{
        if(!acticeLyrics) return;
        const Length = lyrics.length;
    },[])
    return (
        <div className="details">
            <div className={`lyrics-layer ${(acticeLyrics)?'show':''}`}>
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