import {React,useState} from 'react';
import Player from './components/Player';
import './App.css';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
  const [songs] = useState([
    {
      title:"FuryWeekend-Dancekiller",
      artist:"artist1",
      image:"images/image",
      audio:"../audio/FuryWeekend-Dancekiller.mp3"
    },
    {
      title:"Fury Weekend - Euphoria",
      artist:"artist2",
      image:"images/image",
      audio:"../audio/Fury Weekend - Euphoria.mp3"
    },
    {
      title:"Scandroid - Onyx",
      artist:"artist3",
      image:"images/image",
      audio:"../audio/Scandroid - Onyx.mp3"
    }
  ]);

  const [index,setIndex] = useState(0);
  

  return (
    <div className="App">
     
      <Player index={index} setIndex={setIndex} songs={songs}/>
    </div>
  );
}

export default App;
