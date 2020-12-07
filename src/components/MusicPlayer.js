import './MusicPlayer.css';
import { MusicContext } from "../MusicContext";
import {useContext, useEffect} from 'react';

function MusicPlayer(){
    const [musicList, setMusicList] = useContext(MusicContext)[0];
    const [musicPlayerEnabled, setMusicPlayerEnabled] = useContext(MusicContext)[1];
    const [currentPlaying, setCurrentPlaying] = useContext(MusicContext)[2];

    

    function play() {
        return(
            <audio src={URL.createObjectURL(musicList[currentPlaying].file)}></audio>
        );
    }

    useEffect(() => {
        if(musicPlayerEnabled) play();
    });

    return(
        <div className = {(musicPlayerEnabled ? 'player-container' : 'hidden')}>
            <div className="music-image"></div>

            {musicPlayerEnabled? play():''}

            <h3>{musicList[currentPlaying]? musicList[currentPlaying].name : ''}</h3>
            <h4>{musicList[currentPlaying]? musicList[currentPlaying].artist : ''}</h4>
        </div>
    )
}
export default MusicPlayer;