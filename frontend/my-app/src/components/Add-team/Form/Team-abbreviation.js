import React from "react";

const TeamAbbreviation = ({ validation }) => {
	return(
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Shortname</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.tla ? "valid" : "invalid" : ""}`}
					name="nameAbbreviation" id="nameAbbreviation" placeholder="ARS" required/>
				<div className="invalid-feedback">
                    Please enter a valid shortname. It must be a three capital letters.
				</div>
			</div>
		</div>
	);
};

export default TeamAbbreviation;