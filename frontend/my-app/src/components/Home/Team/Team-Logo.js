import React from "react";

const TeamLogo = ({nameAbbreviattion, id, logo}) => {
	return (
		<a  href={`/info/${nameAbbreviattion}/${id}`}><img id={`${nameAbbreviattion}-${id}-logo`} className="logo" src={logo}/></a>
	);
};

export default TeamLogo;