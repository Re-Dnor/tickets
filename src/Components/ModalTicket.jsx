import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalTicket({show, setShow}) {
  return (
    <Modal show={show} onHide={() => setShow(false)} animation={false}>
    <Modal.Body>Woohoo, buy this ticket!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShow(false)}>
        Close
      </Button>
      <Button variant="primary" onClick={() => setShow(false)}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export default ModalTicket;