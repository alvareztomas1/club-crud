/* eslint-disable react/no-unknown-property */
import React from "react";
import MyModal from "../../Modal";

const TeamButtons = ({nameAbbreviation, id }) => {
	return(
		<div id="team-buttons">
			<div className="d-flex">
				<a href={`/info/${nameAbbreviation}/${id}`} className="btn btn-primary">Info <i className="bi bi-arrows-angle-expand"></i></a>
				<a href={`/edit/${nameAbbreviation}/${id}`} className="btn btn-secondary">Edit <i className="bi bi-pen"></i></a>
				<MyModal nameAbbreviation={nameAbbreviation} id={id} />
			</div>
		</div>
	);
};

export default TeamButtons;