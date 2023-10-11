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

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then(r => r.json())
      .then(data => {
        setTeams(data)
      })
  }, [])

  function addNewTeam(newTeam) {
    setTeams([
      ...teams,
      newTeam
    ])
  }

  function addNewPlayer(newPlayer) {
    const updatedTeams = teams.map((team) => {
      if (team.id === newPlayer.team_id) {
        team.players.push(newPlayer)
      }
      return team
    })
    setTeams(updatedTeams)
  }
  
  function onDelete(deletedPlayer) {
    const updatedTeams = teams.map((team) => {
      if (team.id === deletedPlayer.team_id) {
        team.players = team.players.filter((player) => player.id !== deletedPlayer.id)
      }
      return team
    })
    setTeams(updatedTeams)
  }

  function onUpdate(updatedPlayer) {
    const updatedTeams = teams.map((team) => {
      if (team.id === updatedPlayer.team_id) {
        team.players = team.players.map((player) => {
          if (player.id === updatedPlayer.id) {
            return updatedPlayer
          }
          else return player
        })
      }
      return team
    })
    setTeams(updatedTeams)
}

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/newTeam">
          <NewTeamForm addNewTeam={addNewTeam} />
        </Route>
        <Route path="/teams/:id">
          <TeamPage teams={teams} onDelete={onDelete} />
        </Route>
        <Route path="/players/:id">
          <EditPlayerForm teams={teams} onUpdate={onUpdate} />
        </Route>
        <Route path="/newPlayer/:id">
          <NewPlayerForm addNewPlayer={addNewPlayer} />
        </Route>
        <Route exact path="/">
          <TeamsList teams={teams} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
