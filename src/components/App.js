import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NewTeamForm from './NewTeamForm';
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import EditPlayerForm from './EditPlayerForm';

function App() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then(r => r.json())
      .then(setTeams)
  }, [])

  function addNewTeam(newTeam) {
    setTeams([
      ...teams,
      newTeam
    ])
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/newTeam">
          <NewTeamForm addNewTeam={addNewTeam} />
        </Route>
        <Route path="/teams/:id">
          <TeamPage />
        </Route>
        <Route path="/players/:id">
          <EditPlayerForm />
        </Route>
        <Route exact path="/">
          <TeamsList teams={teams} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
