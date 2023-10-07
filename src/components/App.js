import { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NewTeamForm from './NewTeamForm';

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
      </Switch>
    </div>
  );
}

export default App;
