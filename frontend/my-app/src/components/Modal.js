import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const MyModal = ({ id }) => {

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
		
	return (
		<div id="modal">
			<Button id={`show-${id}-modal-button`} variant="danger" onClick={handleShow}>
                Delete <i className="bi bi-trash"></i>
			</Button>

			<Modal id={`${id}-modal`} show={show} onHide={handleClose} size="sm" centered>
				<Modal.Header  closeButton id={`close-${id}-modal`}> 
					<strong>Sure you want to delete?</strong>	
				</Modal.Header>

				<Modal.Footer>
					<a id={`${id}-delete-button`} className="btn btn-danger delete-button" href={`/delete-team/${id}`}>Delete</a>	
				</Modal.Footer>
			</Modal>


		</div>

	);
};

export default MyModal;