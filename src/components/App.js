import { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';

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
    </div>
  );
}

export default App;
