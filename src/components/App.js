import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerdata';
import PlayerList from './PlayerList'

// console.log("players", playerData)

function App() {
  return (
    <div className="container">
      <Welcome />
      <PlayerList players={playerData}/>
    </div>
  );
}

export default App;
