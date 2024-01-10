import React from "react";
const Details = ({ foundedYear, stadium, address }) => {

	return(
		<div id="team-details">
			<h1>Team details</h1>
        
			<p id="foundedYear" className="display-6">
				<i className="bi bi-flag"></i> Founded year: {foundedYear}
			</p>
            
			<p id="stadium" className="display-6">
				<i className="bi bi-house"></i>Stadium: {stadium}
			</p>
        
			<p id="address" className="display-6">
				<i className="bi bi-geo-alt"></i>Address: {address}
			</p>
		</div>
	);
	
    

};

export default Details;