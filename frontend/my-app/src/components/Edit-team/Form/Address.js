import React from "react";

const Address = ({address, validation}) => {
	return(
		<div className="form-group row">
			<label htmlFor="address" className="col-sm-2 col-form h5">Address</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.address ? "valid" : "invalid" : ""}`}
					name="address" id="address" placeholder="75 Drayton Park London N5 1BU" defaultValue={address}
					required/>
				<div id="address-feedback" className="invalid-feedback">
				Please enter a valid address. It must be between 5 and 35 characters. The valid special characters are: - , . ’ °.
				</div>
			</div>
		</div>
	);
};

export default Address;