import React from "react";

const Buttons = () => {

	return (
		<div id="add-team-buttons">
			<a href="/" className="btn btn-secondary">Back <i className="bi bi-arrow-left"></i></a>
			<button id="add-team-button" type="submit" className="btn btn-primary">Add team <i className="bi bi-send"></i></button>
		</div>
	);
	
	
};

export default Buttons;