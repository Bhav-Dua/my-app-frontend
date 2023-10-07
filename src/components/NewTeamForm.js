import React, { useState } from "react";

function NewTeamForm() {

    const [formData, setFormData] = useState({teamName: "", teamLogo: "", wins: 0, losses: 0})

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
            <label htmlFor="teamName">Team Name </label>
            <input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleFormData} />
            </div>
            <div className="field">
            <label htmlFor="teamLogo">Team Logo </label>
            <input type="text" id="teamLogo" name="teamLogo" value={formData.teamLogo} onChange={handleFormData} />
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