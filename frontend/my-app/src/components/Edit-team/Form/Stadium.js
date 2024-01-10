import React from "react";

const Stadium = ({stadium, validation}) => {
	return(
		<div className="form-group row">
			<label htmlFor="stadium" className="col-sm-2 col-form h5">Stadium</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.venue ? "valid" : "invalid" : ""}`}
					name="stadium" id="stadium" placeholder="Emirates Stadium" defaultValue={stadium} required/>
				<div className="invalid-feedback">
            Please enter a valid stadium name. It must be between 3 and 30 characters and not contain special characters.
				</div>
			</div>
		</div>
	);
};

export default Stadium;