import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Feedback from "react-bootstrap/Feedback";

export default function EditItemAdmin(props) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [itemId, setItemId] = useState(props.itemId);
  const [itemName, setItemName] = useState(props.itemName);
  const [itemDescription, setItemDescription] = useState(props.itemDescription);
  const [itemPrice, setItemPrice] = useState(props.itemPrice);
  const [itemImageLink, setItemImageLink] = useState(props.itemImageLink);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  function formChecker() {
    let itemObj = {
      itemId: itemId,
      itemName: itemName,
      itemDescription: itemDescription,
      itemPrice: itemPrice,
      itemImageLink: itemImageLink,
    };
    Object.keys(itemObj).map((objKey, index) => {
      if (itemObj[objKey].length > 0 && itemObj.itemPrice >= 0) {
        console.log(itemObj);
      }
    });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Item
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="addItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                onChange={(e) => setItemName(e.target.value)}
                required
                type="text"
                placeholder="Item Name"
                autoFocus
                defaultValue={itemName}
              />
              <Form.Control.Feedback type="invalid">
                Please Insert Item Name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addItemDescription">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                onChange={(e) => setItemDescription(e.target.value)}
                required
                as="textarea"
                rows={2}
                defaultValue={itemDescription}
              />
              <Form.Control.Feedback type="invalid">
                Please Add Item Description
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addItemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(e) => setItemPrice(parseInt(e.target.value))}
                required
                type="number"
                min="0"
                placeholder="$"
                autoFocus
                defaultValue={itemPrice}
              />
              <Form.Control.Feedback type="invalid">
                Please Specify Price
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addItemImageLink">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                onChange={(e) => setItemImageLink(e.target.value)}
                required
                type="text"
                placeholder="Paste Link Here"
                autoFocus
                defaultValue={itemImageLink}
              />
              <Form.Control.Feedback type="invalid">
                Please Link to Item Image
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
