const express = require("express")
const cors = require('cors');

const lyricsFinder = require('lyrics-finder');

const app = express()

app.use(cors());

//Functions
const getLyrics = async (artist,song)=>{
    const lyrics = await lyricsFinder(artist,song);
    //console.log(lyrics);
    return lyrics;
}

const port = 5000;

app.get('/lyrics',(req,res)=>{
    
    const artist = req.query.artist;
    const song = req.query.song;
    console.log(artist)
    const lyrics = getLyrics(artist,song)
    .then(re => res.json({lyrics:re}));
    
})

app.listen(port,()=>{
    console.log("server running")
})