import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function TeamPage() {

    const [players, setPlayers] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/players_by_team/${id}`)
            .then(r => r.json())
            .then(setPlayers)
    })

    const toDisplay = players.map(player => (
        <div className="item">
            <div className="header">{player.first_name}</div>
            {player.age}
        </div>
    ))


    return (
        <div className="ui list">
            {toDisplay}
        </div>
    )
}

export default TeamPage;