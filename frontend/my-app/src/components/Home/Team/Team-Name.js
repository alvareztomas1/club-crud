import React from "react";

const TeamName = ({teamName, id, nameAbbreviattion}) => {
	return (
		<a href={`/info/${nameAbbreviattion}/${id}`}><h1 id="team-name" className="display-6">{teamName}</h1></a>
	);
};

export default TeamName;
