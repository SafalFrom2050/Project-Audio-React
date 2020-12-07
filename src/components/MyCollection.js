import './MyCollection.css';
import { MusicContext } from "../MusicContext";
import MusicList from './MusicList';
import {useContext} from 'react';
import jDataView from 'jdataview';

function MyCollection(){
    const [musicList, setMusicList] = useContext(MusicContext)[0];

    const addMusicToTheList = async (newSong) =>{
        setMusicList(musicList.concat(newSong));
    };


    const onFilesChange = (e) =>{
        const files = Array.from(e.target.files);

        var tempArray = [];
        files.forEach(async (file) => {
            let reader = new FileReader();

            reader.onload = await function(e) {
                let dv = new jDataView(this.result);

                // "TAG" starts at byte -128 from EOF.
                // http://en.wikipedia.org/wiki/ID3
                let title='';
                if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
                    title = dv.getString(30, dv.tell());

                    var artist = dv.getString(30, dv.tell());
                    // var album = dv.getString(30, dv.tell());
                    // var year = dv.getString(4, dv.tell());

                    console.log("Successful!!!!");
                    console.log(artist);
                } else {
                    title = file.name.substring(0, file.name.length - 1 -3);
                    //console.log(title);
                    //console.log(file);
                }

                var newSong = {name:title, artist:artist,  nowPlaying:false, file:file};
                
                tempArray = tempArray.concat(newSong);
                console.log("Result:" + tempArray.length);
                addMusicToTheList(tempArray);
            };
            
            reader.readAsArrayBuffer(file); 
        });    
    }

    return(
        <div className='my-collection'>
            <input type="file" class="files-chooser" multiple accept="audio/mpeg, audio/ogg, audio/wav" onChange={onFilesChange} />
            <MusicList></MusicList>
        </div>
    );
}

export default MyCollection;