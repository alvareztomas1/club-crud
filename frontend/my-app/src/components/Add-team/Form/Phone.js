import React from "react";

const Phone = ({ validation }) => {
	return (
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Phone</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.phone ? "valid" : "invalid" : ""}`}
					name="phone" id="phone" placeholder="+44 (020) 76195003" />
				<div id="phone-feedback" className="invalid-feedback">
					Please enter a valid phone number. It must follow the international format.
				</div>
			</div>
		</div>
	);
};

export default Phone;