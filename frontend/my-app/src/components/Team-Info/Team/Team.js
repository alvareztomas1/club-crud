import React from "react";
import TeamName from "./Team-Name";

const Team = ({teamData}) => {
	if(teamData){
		return (
			<TeamName teamName={teamData.name} logo={teamData.logo}/>
		);
	}
	
};

export default Team;
