import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { PutProduct } from "../../lib/api_calls/api_calls";

export default function EditItemAdmin(props) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [itemId, setItemId] = useState(props.itemId);
  const [itemName, setItemName] = useState(props.itemName);
  const [itemDescription, setItemDescription] = useState(props.itemDescription);
  const [itemPrice, setItemPrice] = useState(props.itemPrice);
  const [itemImageLink, setItemImageLink] = useState(props.itemImageLink);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    setLoading(true);
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    let formComplete = false;

    let itemObj = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: itemImageLink,
    };

    formComplete = formChecker(itemObj, formComplete);
    if (formComplete === true) {
      PutProduct(itemObj, itemId);
      setShow(false);
    }

    setLoading(false);
  };

  function formChecker(obj, formBoolean) {
    Object.keys(obj).map((objKey, index) => {
      if (obj[objKey].length > 0 && obj.price >= 0) {
        return (formBoolean = true);
      } else {
        return (formBoolean = false);
      }
    });
    return formBoolean;
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
          <Button
            disabled={loading}
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
