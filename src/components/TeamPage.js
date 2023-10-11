import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PlayerCard from "./PlayerCard";

function TeamPage({ teams }) {
    const [players, setPlayers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const filteredTeam = teams.find((team) => team.id == id);
        if (filteredTeam) {
            setPlayers(filteredTeam.players);
        }
    }, [id, teams]);

    function onDelete(deletedPlayer) {
        setPlayers(players.filter((player) => player.id !== deletedPlayer.id));
    }

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
