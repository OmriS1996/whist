import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { PostProduct } from "../../lib/api_calls/api_calls";

export default function AddItemAdmin() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImageLink, setItemImageLink] = useState("");
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
      PostProduct(itemObj);
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
        Add Item
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
