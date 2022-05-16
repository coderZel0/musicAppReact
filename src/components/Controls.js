import {React,useEffect,useState,useRef} from 'react';
import "./Control.css";

const Controls = ({index,setIndex,songs,play,setPlay,volume,setVolume,repeat,setRepeat})=>{
   
    //const {audio}=songs[index];
    const volRef = useRef(null);
   

    const handlePlay =()=>{
        setPlay(!play);
    }

    const handleNext = ()=>{
        setIndex(index=>{
            index++;
            if(index>songs.length-1){
                index=0;
            }
            return index;
        });
        setPlay(true);
    }

    const handlePrev = ()=>{
        setIndex(index=>{
            index--;
            if(index<0){
                index=songs.length-1;
            }
            return index;
        });
        setPlay(true);
    }
    const handleVolume = (e)=>{
        const clickX = e.nativeEvent.offsetX;
        //console.log(clickX);
        //console.log(volRef.current.clientWidth)
        let vol = (clickX/volRef.current.clientWidth);
        //console.log(vol);
        if(vol<0){
            vol=0;
        }
        else if(vol>1){
            vol=1;
        }
        setVolume(vol);
    }
    const Repeat=()=>{
        setRepeat(state=>!state);
    }
    

    return (
        <div className='controls'>
            <div className='layer'>
            </div>
            <div className='playbar'> 
            </div>
            <div className='lyricscontrol'>
                <div onClick={()=>{Repeat()}} className='repeat center'><i className={(repeat)?'fas fa-repeat-1':'fa-solid fa-repeat'}></i></div>
                <div className='lyricsactive center'><i className='fa-solid fa-music'></i></div>
            </div>
            <div className='buttons'>
                <div className='button'>
                    <button className='prev' onClick={()=>{handlePrev()}}><i className='fa-solid fa-backward-step'></i></button>
                </div>
                <div className='button'>
                    <button className="play" onClick={()=>{handlePlay()}}><i className={`${(play)?'fa fa-pause':'fa fa-play'}`}></i></button>
                </div>
                <div className='button'>
                    <button className='next' onClick={()=>{handleNext()}}><i className="fa fa-step-forward"></i></button>
                </div>          
            </div>
            <div className='vol-outer-container'>
                <div className='volIcon'><i className={(volume>0.5)?'fa-solid fa-volume-high':'fa-solid fa-volume-low'}></i></div>
                <div ref={volRef} className='volContainer' onClick={(e)=>{handleVolume(e)}}>
                    <div style={{width:`${volume *100}%`}}  className='volume'>
                    </div>   
                </div>
            </div>
            

                            
        </div>
    )
}

export default Controls;