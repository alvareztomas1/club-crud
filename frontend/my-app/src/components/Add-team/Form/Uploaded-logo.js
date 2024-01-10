import React from "react";

const UploadedLogo = () => {
	return(
		<div className="form-group row">
			<label className="col-sm-2 col-form h5">Logo</label>
			<div className="col">
				<input className="form-control logo-file" type="file" name="logo" id="logo"/>
			</div>
			
		</div>
	);
};

export default UploadedLogo;