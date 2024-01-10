import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const MyModal = ({ id }) => {

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
		
	return (
		<div id="modal">
			<Button variant="danger" onClick={handleShow}>
                Delete <i className="bi bi-trash"></i>
			</Button>

			<Modal show={show} onHide={handleClose} size="sm" centered>
				<Modal.Header closeButton> 
					<strong>Sure you want to delete?</strong>	
				</Modal.Header>

				<Modal.Footer>
					<a className="btn btn-danger" href={`/delete-team/${id}`}>Delete</a>	
				</Modal.Footer>
			</Modal>


		</div>

	);
};

export default MyModal;