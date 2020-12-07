import { MusicContext } from "../MusicContext";
import MusicItem from './MusicItem';
import {useContext} from 'react';

function MusicList(){

    const [musicList, setMusicList] = useContext(MusicContext)[0];

    return(
        <div className="list">
            <h1 className="page-title">Library</h1>
      
            {musicList.map((music,index) =>{
          
                return (<MusicItem name = {music.name} nowPlaying = {index}></MusicItem>);
            })}
        </div>
    );
}

export default MusicList;