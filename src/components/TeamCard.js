import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeamCard({ id, teamName, teamLogo, wins, losses }) {

    return (
        <div className="ui card">
            <div className="image">
                <img src={teamLogo} alt={teamName} />
            </div>
            <div className="content">
                <h3 className="header">{teamName}</h3>
                <h4 className="wins">Wins: {wins}</h4>
                <h4 className="losses">Losses: {losses}</h4>
            </div>
            <Link to={`/teams/${id}`}>See Roster</Link>
        </div>
    )
}

export default TeamCard;