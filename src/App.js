import './App.css';
import Nav from './components/Nav';
import MusicPlayer from './components/MusicPlayer';
import ConnectionStatus from './components/ConnectionStatus';
import MusicList from './components/MusicList';
import { MusicProvider } from './MusicContext';
import MyCollection from './components/MyCollection';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return(
    <MusicProvider>
      <Router>
        <div className="featured-image"> </div>
        <Nav />
        <switch>
          <Route path="/" exact component={MusicRoom}></Route>
          <Route path="/mycollection" component={MyCollection}></Route>
        </switch>
      </Router>
      <MusicPlayer />
    </MusicProvider>
  );
}

const MusicRoom = ()=>(
  <MusicProvider>
    <ConnectionStatus></ConnectionStatus>
    <MusicList></MusicList>
  </MusicProvider>
);

export default App;
