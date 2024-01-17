import React from "react";
import MyModal from "../Modal";
const Buttons = ({teamData}) => {
	if(teamData){
		return (
			<div className="team-info-buttons">
				<a id="back-button" href="/" className="btn btn-secondary">Back <i className="bi bi-arrow-left"></i></a>
				<a id="edit-button" href={`/edit/${teamData.nameAbbreviation}/${teamData.id}`} className="btn btn-primary">Edit <i className="bi bi-pen"></i></a>
				<MyModal nameAbbreviation={teamData.nameAbbreviation} id={teamData.id} />
			</div>
		);
	}
	
};

export default Buttons;