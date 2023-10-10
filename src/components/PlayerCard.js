import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PlayerCard({ first_name, last_name, age, id, onDelete }) {

    function deletePlayer() {
        fetch(`http://localhost:9292/players/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(onDelete)
    }

    return (
        <div className="ui card">
            <div className="content">
                <h4 className="header">{first_name + " " + last_name}</h4>
                <h3 className="age">{age}</h3>
                <Link to={`/players/${id}`}>Edit Player    </Link>
                <button onClick={deletePlayer}>Delete Player</button>
            </div>
        </div>
    )
}

export default PlayerCard;