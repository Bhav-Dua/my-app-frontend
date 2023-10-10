import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function NewPlayerForm() {

    const history = useHistory()
    const [formData, setFormData] = useState({first_name: "", last_name: "", age: 0, team_id: 0})
    const { id } = useParams();

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()

        setFormData({
            ...formData,
            team_id: id
        })

        fetch(`http://localhost:9292/players`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(player => history.push(`/teams/${player.team_id}`))
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

export default NewPlayerForm;