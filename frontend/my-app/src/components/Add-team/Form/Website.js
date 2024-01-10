import React
	from "react";
const Website = ({ validation }) => {
	return(
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Web</label>
			<div className="col">
				<input type="text"
					className={`form-control is-${validation ? validation.website ? "valid" : "invalid" : ""}`}
					name="website" id="website" placeholder="http://www.arsenal.com" />
				<div className="invalid-feedback">
                    Please enter a valid website. It must match the example.
				</div>
			</div>
		</div>
	);
};

export default Website;