import React from "react";

const TeamName = ({teamName, logo}) => {
	return (
		<h1 className="display-3">{teamName}<img className="team-info-logo" src={logo}></img></h1>
	);
};

export default TeamName;
