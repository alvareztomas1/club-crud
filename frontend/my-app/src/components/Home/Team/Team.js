import React from "react";
import TeamButtons from "./Team-Buttons";
import TeamLogo from "./Team-Logo";
import TeamName from "./Team-Name";

const Team = ({team, key }) => {
	return(
		<React.Fragment>
			<div id={`${team.name}-${key}`} className="container text-center team-container team">
				<div className="row align-items-center">
					<div className="col">
						<TeamLogo id={team.id} nameAbbreviattion={team.nameAbbreviation} logo={team.logo} />
					</div>
					<div className="col">
						<TeamName id={team.id} nameAbbreviattion={team.nameAbbreviation} teamName={team.name} />
					</div>
					<div className="col">
						<TeamButtons nameAbbreviation={team.nameAbbreviation} id={team.id} />
					</div>
				</div>
				<br></br>
			</div>
		</React.Fragment>
	);
};

export default Team;