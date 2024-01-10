import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";

const MyToast = ({ type, text, showToast }) => {
	const [show, setShow] = useState(true);
	
	return (
		<Row>
			<Col xs={6}>
				<ToastContainer 
					className="p-3"
					position="bottom-end">
						
					<Toast  
						className={`toast align-items-center text-bg-${type || ""} border-0 ${showToast ? "" : " visually-hidden"}`}
						onClose={() => setShow(false)} 
						show={show} 
						delay={3000} 
						autohide>

						<div className="d-flex">
							<Toast.Body>{`${text} `}<i className="bi bi-check-circle-fill"></i></Toast.Body>
							<Button  className="btn-close btn-close-white me-2 m-auto"onClick ={() => setShow(false)}></Button>
						</div>

					</Toast>
				</ToastContainer>
			</Col>
			
		</Row>
	);
};

export default MyToast;