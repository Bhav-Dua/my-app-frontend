import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NewTeamForm from './NewTeamForm';
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import EditPlayerForm from './EditPlayerForm';
import NewPlayerForm from './NewPlayerform';

function App() {

  const [teams, setTeams] = useState([])
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then(r => r.json())
      .then(data => {
        setTeams(data)
        setAllPlayers(data.map((team) => team.players).flat())
      })
  }, [])

  function addNewTeam(newTeam) {
    setTeams([
      ...teams,
      newTeam
    ])
  }
  
  function onDelete(deletedPlayer) {
    setAllPlayers(allPlayers.filter((player) => player.id !== deletedPlayer.id));
  }

  function onUpdate(updatedPlayer) {
    const updatedPlayers = allPlayers.map((player) => {
        if (player.id === updatedPlayer.id) {
            return updatedPlayer
        }
        else return player
    })
    setAllPlayers(updatedPlayers)
}

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/newTeam">
          <NewTeamForm addNewTeam={addNewTeam} />
        </Route>
        <Route path="/teams/:id">
          <TeamPage allPlayers={allPlayers} onDelete={onDelete} />
        </Route>
        <Route path="/players/:id">
          <EditPlayerForm allPlayers={allPlayers} onUpdate={onUpdate} />
        </Route>
        <Route path="/newPlayer/:id">
          <NewPlayerForm />
        </Route>
        <Route exact path="/">
          <TeamsList teams={teams} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
