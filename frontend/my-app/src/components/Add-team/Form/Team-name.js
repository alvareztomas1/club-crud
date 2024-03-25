import React from "react";

const TeamName = ({ validation={validation} }) =>{
	return(
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Club Name</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.name ? "valid" : "invalid" : ""}`}
					name="name" id="name" placeholder="Arsenal FC" required />
				<div id="name-feedback" className="invalid-feedback">
                    Please enter a valid club name. It must be between 3 and 30 characters.
				</div>
			</div>
		</div>
	);
};

export default TeamName;