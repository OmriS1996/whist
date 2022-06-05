import { useContext, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { StoreContext } from "../../App";

export default function AddToCart(props) {
  const [storeArray, setStoreArray] = useContext(StoreContext);

  function handleAction() {
    let storeState = [...storeArray];

    if (storeState.length > 0) {
      for (let item of storeState) {
        if (item.id === props.itemId) {
          item.count++;
          setStoreArray(storeState);
          return;
        }
      }
    }
    storeState.push({
      id: props.itemId,
      name: props.itemName,
      price: props.itemPrice,
      image: props.itemImage,
      count: 1,
    });

    setStoreArray(storeState);
  }

  return (
    <div>
      <Button variant="success" onClick={handleAction}>
        Add to Cart
      </Button>
    </div>
  );
}
