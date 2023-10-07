import React from "react";
import TeamCard from "./TeamCard";

function TeamsList({ teams }) {

    const toDisplay = teams.map(team => (
        <TeamCard
        id={team.id}
        teamName={team.team_name}
        teamLogo={team.team_logo}
        wins={team.wins}
        losses={team.losses}
        />
    ))
    

    return (
        <div className="ui cards">
            {toDisplay}
        </div>
    )

}

export default TeamsList;