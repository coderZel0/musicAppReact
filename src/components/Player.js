import {React,useEffect,useState,useRef} from "react";
import './Player.css';
import Details from "./Details";
import Controls from "./Controls";


const Player =(props)=>{
    const {index,setIndex,songs} = props;
    const [play,setPlay] = useState(false);
    const [lyrics,setLyrics] = useState('');
    const [activeLyrics,setActive] = useState(false);
    const [volume,setVolume] = useState(1);
    const [repeat,setRepeat] = useState(false);

    const audioEL = useRef(null);
    //const song = new Audio();

    const playSong = ()=>{
        //setPlay(true);
        audioEL.current.play();
    }

    useEffect(()=>{
       
        audioEL.current.pause();
        if(songs){
            audioEL.current.src = songs[index].audio;
            playSong();
        }
        

    },[index])

    useEffect(()=>{
       
        if(play){
            console.log(songs[index].audio)
            console.log(audioEL.current.src)
            audioEL.current.play();
           
        }
        else{
            audioEL.current.pause();
        }
        
    },[play])

    useEffect(()=>{
        audioEL.current.addEventListener('ended',()=>{
            setIndex((index)=>{
                index++;
                if(index>songs.length-1){
                    return 0;
                }
                return index;
            });
        })
        //return ()=>{audioEL.current.removeEventListener('ended',()=>console.log("removed"))};
    },[])
    useEffect(()=>{
        audioEL.current.volume = volume || 0.5;
    },[volume])
    return (
        <div className="player">
            <audio ref={audioEL}></audio>
            <Details index={index} songs={songs} play={play}/>
            <Controls repeat={repeat} setRepeat={setRepeat} volume={volume} setVolume={setVolume} index={index} setIndex={setIndex} songs={songs} play={play} setPlay={setPlay}/>
        </div>
    )
}

export default Player;