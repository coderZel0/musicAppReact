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
    const [progress,setProgress]= useState(0);
    const [audioDuration,setDuration] = useState(0);
    const [currentAudioTime,setTime] = useState(0);

    const audioEL = useRef(null);
    //const song = new Audio();

    const playSong = ()=>{
        //setPlay(true);
        audioEL.current.play();
    }
    //Load lyrics

    useEffect(()=>{
        setLyrics('');
        const artist = songs[index].artist;
        const song = songs[index].title;
        fetch(`http://localhost:5000/lyrics?artist=${artist}&&song=${song}`,{
            method:'GET',
            headers:{'Content-Type':'Application/json'},
        })
        .then(res=> res.json())
        .then(res=>{console.log(res)
            if(res.lyrics){
                setLyrics(res.lyrics)
            }
            else{
                setLyrics("No Lyrics Found!")
            }
            
        })
        .catch(err=>console.log(err))
    },[index])


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
        
        audioEL.current.addEventListener('timeupdate',()=>{
            const prog = (audioEL.current.currentTime/audioEL.current.duration)*100;
            setProgress(prog);
            
        })

        return ()=>{audioEL.current.removeEventListener('ended',()=>console.log("removed"))
                    audioEL.current.removeEventListener('timeupdate',()=>{setProgress(0);});
                    
        };
    },[])
    useEffect(()=>{
        audioEL.current.volume = volume ;
    },[volume])

    useEffect(()=>{
        audioEL.current.onloadedmetadata= ()=>{
            console.log('loaded');
            setDuration(audioEL.current.duration);
            console.log(audioDuration);
        };
    },[index])

    useEffect(()=>{
        audioEL.current.currentTime = currentAudioTime; //currentAudioTime dont update width time
    },[currentAudioTime])                               //it stores the value where you last clicked in progressbar

    return (
        <div className="player">
            <audio ref={audioEL} preload="metadata"></audio>
            <Details index={index} lyrics={lyrics} activeLyrics={activeLyrics} songs={songs} play={play}/>
            <Controls setActive={setActive} activeLyrics={activeLyrics} setTime={setTime} audioDuration={audioDuration} progress={progress} setProgress={setProgress} repeat={repeat} setRepeat={setRepeat} volume={volume} setVolume={setVolume} index={index} setIndex={setIndex} songs={songs} play={play} setPlay={setPlay}/>
        </div>
    )
}

export default Player;