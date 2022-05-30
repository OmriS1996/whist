import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteItemAdmin(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete() {
    setIsLoading(true);
    //insert delete api here with item id
    console.log(props.itemId);
    setIsLoading(false);
    handleClose();
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        {isLoading ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Deleting...</Modal.Title>
            </Modal.Header>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Are You Sure You Want to Delete {props.itemName}?
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}
