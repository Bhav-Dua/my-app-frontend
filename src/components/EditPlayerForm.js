import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditPlayerForm({ allPlayers, onUpdate }) {

    const history = useHistory()
    const [formData, setFormData] = useState({first_name: "", last_name: "", age: 0, team_id: 0})
    const { id } = useParams();

    useEffect(() => {
        const player = allPlayers.find((player) => player.id == id)
        setFormData({
            first_name: player.first_name,
            last_name: player.last_name,
            age: player.age,
            team_id: player.team_id,
        })
    }, [id, allPlayers])

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()

        fetch(`http://localhost:9292/players/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(player => {
            onUpdate(player)
            history.push(`/teams/${player.team_id}`)
        })
    }

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
            <label htmlFor="first_name">First Name </label>
            <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="last_name">Last Name </label>
            <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="age">age </label>
            <input type="number" min="0" id="age" name="age" value={formData.age} onChange={handleFormData} />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
    )
}

export default EditPlayerForm;