import React from "react";

const TeamName = ({teamName, id, nameAbbreviattion}) => {
	return (
		<a href={`/info/${nameAbbreviattion}/${id}`}><h1 className="display-6 team-name">{teamName}</h1></a>
	);
};

export default TeamName;
