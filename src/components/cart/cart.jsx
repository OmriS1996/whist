import { useEffect, useState, useContext } from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { StoreContext } from "../../App";
import CartPayButton from "../cart_pay_button/cart_pay_button";

export default function Cart(props) {
  const [storeArray, setStoreArray] = useContext(StoreContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;

    for (let item of storeArray) {
      sum += item.count * item.price;
    }
    setTotal(sum);
  }, [storeArray]);

  return (
    <div>
      {storeArray.length > 0 ? (
        <>
          <ListGroup
            as="ol"
            numbered
            className="d-flex justify-content-between align-items-start"
          >
            {storeArray.map((item) => {
              return (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.count}
                  </div>
                  <Badge bg="primary" pill>
                    {item.price * item.count + "$"}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <div>Total: {total + "$"}</div>
          <CartPayButton />
        </>
      ) : (
        "No Items Added"
      )}
    </div>
  );
}
