import React from "react";
const FoundedYear = ({foundedYear, validation}) => {
	return(
		<div className="form-group row">
			<label htmlFor="founded-year" className="col-sm-2 col-form h5">Founded Year</label>
			<div className="col">
				<input type="number"
					className={`form-control is-${validation ? validation.founded ? "valid" : "invalid" : ""}`}
					name="founded" id="founded-year" placeholder="1886" defaultValue={foundedYear} required/>
				<div className="invalid-feedback">
            Please enter a valid founded year. It must be Between 1857 and current year.
				</div>
			</div>
		</div>
	);
};

export default FoundedYear;