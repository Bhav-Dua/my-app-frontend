import React, { useState } from "react";

function NewTeamForm() {

    const [formData, setFormData] = useState({team_name: "", team_logo: "", wins: 0, losses: 0})

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()

        fetch("http://localhost:9292/teams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(addNewTeam)
    }

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
            <label htmlFor="team_name">Team Name </label>
            <input type="text" id="team_name" name="team_name" value={formData.team_name} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="team_logo">Team Logo </label>
            <input type="text" id="team_logo" name="team_logo" value={formData.team_logo} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="wins">Wins </label>
            <input type="number" min="0" id="wins" name="wins" value={formData.wins} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="losses">Losses </label>
            <input type="number" min="0" id="losses" name="losses" value={formData.losses} onChange={handleFormData} />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
    )
}