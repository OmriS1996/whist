import { StoreContext } from "../../App";
import Button from "react-bootstrap/esm/Button";
import { useState, useContext } from "react";
import { PostPurchase } from "../../lib/api_calls/api_calls";

export default function CartPayButton(props) {
  const [storeArray, setStoreArray] = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    PostPurchase(storeArray);
    setStoreArray([]);
    setIsLoading(false);
  }

  return (
    <div>
      <Button onClick={handleSubmit} disabled={isLoading} variant="success">
        {isLoading ? "Proccessing..." : "Purchase"}
      </Button>
    </div>
  );
}
