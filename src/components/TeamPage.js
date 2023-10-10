import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PlayerCard from "./PlayerCard";

function TeamPage() {

    const [players, setPlayers] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/players/by_team/${id}`)
            .then(r => r.json())
            .then(setPlayers)
    }, [])

    function onDelete(deletedPlayer) {
        setPlayers(players.filter(player => player.id !== deletedPlayer.id))
    }

    const toDisplay = players.map(player => (
        <PlayerCard
        first_name={player.first_name}
        last_name={player.last_name}
        age={player.age}
        id={player.id}
        onDelete={onDelete}
        />
    ))


    return (
        <div className="ui cards">
            {toDisplay}
        </div>
    )
}

export default TeamPage;