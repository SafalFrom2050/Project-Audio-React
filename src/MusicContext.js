import { useState, createContext } from 'react';


export const MusicContext = createContext();

export const MusicProvider = props =>{
    const [musicList, setMusicList] = useState([
        
      ]);

    const [musicPlayerEnabled, setMusicPlayerEnabled] = useState(false);
    const [currentPlaying, setCurrentPlaying] = useState(-1);

    return (
        <MusicContext.Provider value = {[[musicList, setMusicList], [musicPlayerEnabled, setMusicPlayerEnabled], [currentPlaying, setCurrentPlaying]]} >
            {props.children}
        </MusicContext.Provider>
    );
}


// Sample Data


// {name:"Hello, You Beautiful Thing", nowPlaying:true, file:fileeee},
// {name:"Pretty Awkward", nowPlaying:false, file:fileee},