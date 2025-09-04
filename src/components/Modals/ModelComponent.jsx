import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

const ModelComponent = ({
  handleClose,
  bookId,
  props,
  tittle,
  component,
  footer,
  show,
}) => {
  component;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{tittle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center px-2">
        {component}
      </Modal.Body>
      <Modal.Footer>
        {footer}
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelComponent;
