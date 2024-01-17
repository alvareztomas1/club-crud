/* eslint-disable react/no-unknown-property */
import React from "react";
import MyModal from "../../Modal";

const TeamButtons = ({nameAbbreviation, id }) => {
	return(
		<div className="team-buttons">
			<div className="d-flex">
				<a href={`/info/${nameAbbreviation}/${id}`}  id={`${id}-info-button`} className="btn btn-primary">Info <i className="bi bi-arrows-angle-expand"></i></a>
				<a href={`/edit/${nameAbbreviation}/${id}`} id={`${id}-edit-button`} className="btn btn-secondary">Edit <i className="bi bi-pen"></i></a>
				<MyModal nameAbbreviation={nameAbbreviation} id={id} />
			</div>
		</div>
	);
};

export default TeamButtons;