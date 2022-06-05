import AddToCart from "../add_to_cart/add_to_cart";
import "./item_card.css";

export default function ItemCard(props) {
  return (
    <div className="itemCard">
      <div>
        <img src={props.itemImage} />
      </div>
      <div>
        <h3>{props.itemName}</h3>
        <p>{props.itemPrice + "$"}</p>
        <p>{props.itemDescription}</p>
      </div>
      <div>
        <AddToCart
          itemId={props.itemId}
          itemName={props.itemName}
          itemPrice={props.itemPrice}
          itemImage={props.itemImage}
        />
      </div>
    </div>
  );
}
