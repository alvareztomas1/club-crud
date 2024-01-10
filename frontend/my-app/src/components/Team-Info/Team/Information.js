import React from "react";
import Contact from "./Contact";
import Details from "./Details";

const Information = ({ teamData }) => {
	if (teamData) {
		return (
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<Contact phone={teamData.phone} website={teamData.website} email={teamData.email} />
					</div>
					<div className="col">
						<Details foundedYear={teamData.founded} address={teamData.address} stadium={teamData.stadium}/>
					</div>
				</div>
			</div >
		);
	}
	
};

export default Information;