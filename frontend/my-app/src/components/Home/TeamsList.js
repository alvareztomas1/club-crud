import React from "react";
import Team from "./Team/Team";


const TeamsList = ({ teamsData }) => {
	if (teamsData) {		
		return (
			<div id="teamsList">
				{teamsData.map((team, key) => (
					<Team team={team} key={key} />
				))}
			</div>
		);
	}

};

export default TeamsList;