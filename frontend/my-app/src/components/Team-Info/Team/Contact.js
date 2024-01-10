import React from "react";

const Contact = ({phone, website, email}) => {
	return(
		<div id="contact">
			<h1>Contact</h1>
            
			{phone && (
				<p id="phone" className="display-6">
					<i className="bi bi-telephone"></i>{phone}
				</p>
			)}

			{email && (
				<p id="email" className="display-6">
					<i className="bi bi-envelope"></i>{email}
				</p>
			)}

			{website && (
				<a id="website" className="display-6 website" href={website} target="_blank" rel="noreferrer">
					<i className="bi bi-globe"></i>{website}
				</a>
			)}
		</div>
        
	);
};

export default Contact;