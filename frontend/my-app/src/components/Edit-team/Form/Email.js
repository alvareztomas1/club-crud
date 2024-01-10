import React from "react";

const Email = ({email, validation}) => {
	return(
		<div className="form-group row">
			<label htmlFor="inputEmail" className="col-sm-2 col-form h5">Email</label>
			<div className="col">
				<input type="email"
					className={`form-control is-${validation ? validation.email ? "valid" : "invalid" : ""}`}
					name="email" id="email"  placeholder="info@arsenal.co.uk" defaultValue={email}/>
				<div className="invalid-feedback">
            Please enter a valid email. It must follow the generic format.
				</div>
			</div>
		</div>
	);
};

export default Email;