import React from "react";

const Buttons = ({teamData}) => {
	if(teamData){
		return (
			<div id="edit-team-buttons">
				<a href="/" className="btn btn-secondary">Back <i className="bi bi-arrow-left"></i></a>
				<button type="submit"className="btn btn-primary">Edit team <i className="bi bi-send"></i></button>
			</div>
		);
	}
	
};

export default Buttons;