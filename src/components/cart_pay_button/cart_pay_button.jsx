import { StoreContext } from "../../App";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState, useContext } from "react";

export default function CartPayButton(props) {
  const [storeArray, setStoreArray] = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Button variant="success">Purchase</Button>
    </div>
  );
}
