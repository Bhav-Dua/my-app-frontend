import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PlayerCard from "./PlayerCard";

function TeamPage({ allPlayers, onDelete }) {
    const [players, setPlayers] = useState(allPlayers);
    const { id } = useParams();

    useEffect(() => {
        const filteredPlayers = allPlayers.filter((player) => player.team_id == id)
        setPlayers(filteredPlayers)
    }, [id, allPlayers]);

    if (!players.length) return <div>No players in this team.</div>;

    const toDisplay = players.map((player) => (
        <PlayerCard
            key={player.id}
            first_name={player.first_name}
            last_name={player.last_name}
            age={player.age}
            id={player.id}
            onDelete={onDelete}
        />
    ));

    return (
        <div className="ui cards">
            {toDisplay}
            <Link className="newPlayer" to={`/newPlayer/${id}`}>
                Add Player
            </Link>
        </div>
    );
}

export default TeamPage;
