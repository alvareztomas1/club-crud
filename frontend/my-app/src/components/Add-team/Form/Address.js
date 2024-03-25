import React from "react";

const Address = ({ validation }) => {
	return(
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Address</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.address ? "valid" : "invalid" : ""}`}
					name="address" id="address" placeholder="75 Drayton Park London N5 1BU" required/>
				<div id="address-feedback" className="invalid-feedback">
                    Please enter a valid address. It must be between 5 and 35 characters. The valid special characters are: - , . &rsquo; °.
				</div>
			</div>
		</div>
	);
};

export default Address;