import React from "react";

const Loading = ({loading}) => {

	return (
		<div className={`d-flex justify-content-center ${loading ? "" : "visually-hidden"}`}>
			<div id="loading" className="spinner-border text-light" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};
export default Loading;
