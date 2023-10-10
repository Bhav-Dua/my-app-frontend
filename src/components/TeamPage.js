import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function TeamPage() {

    const [players, setPlayers] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/players/by_team/${id}`)
            .then(r => r.json())
            .then(setPlayers)
    }, [])

    const toDisplay = players.map(player => (
        <div className="ui card">
            <div className="content">
                <h4 className="header">{player.first_name + " " + player.last_name}</h4>
                <h3 className="age">{player.age}</h3>
            </div>
        </div>
    ))


    return (
        <div className="ui cards">
            {toDisplay}
        </div>
    )
}

export default TeamPage;