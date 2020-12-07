import './MusicItem.css';
import MusicImage from '../images/music.png';
import { MusicContext } from "../MusicContext";
import {useContext} from 'react';

function MusicItem(props) {
    const [musicList, setMusicList] = useContext(MusicContext)[0];
    const [musicPlayerEnabled, setMusicPlayerEnabled] = useContext(MusicContext)[1];
    const [currentPlaying, setCurrentPlaying] = useContext(MusicContext)[2];

    const index = props.nowPlaying;

    const setPlaying = () => {
        setMusicPlayerEnabled(true);
        setCurrentPlaying(index);
    }

    function isPlaying(){
        return currentPlaying === index;
    }

    return(
        <div className= {"music-item-container "+ (isPlaying() ? "big" : "")} onClick={setPlaying}>
            
            <div className={"music-image-container "+ (isPlaying() ? "now-playing" : "")}>
                <img className="music-image" src={MusicImage} alt=""/>
            </div>
            <h3 className={isPlaying() ? "bigger-title" : ""}>{props.name}</h3>
        </div>
    );
}

export default MusicItem;