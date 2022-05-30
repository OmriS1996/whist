import { useState } from "react";
import ItemCard from "../../components/item_card/item_card";

export default function Home(props) {
  const [mocData, setMocData] = useState([
    {
      id: 1,
      name: "Nutella",
      description: "750g hazelnut spread with cocoa",
      price: 5,
      image:
        "https://cdnx.jumpseller.com/hercules-it-llc/image/17110157/Nutella.jpg?1623999446",
    },
  ]);
  return (
    <div>
      {mocData.map((item) => (
        <ItemCard
          key={item.id}
          itemId={item.id}
          itemName={item.name}
          itemDescription={item.description}
          itemPrice={item.price}
          itemImage={item.image}
        />
      ))}
    </div>
  );
}
