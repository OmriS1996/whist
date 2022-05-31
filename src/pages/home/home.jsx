import { useState, useEffect } from "react";
import ItemCard from "../../components/item_card/item_card";
import { GetPorducts } from "../../lib/api_calls/api_calls";

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [dataArray, setDataArray] = useState([]);

  async function getApi() {
    setLoading(true);
    let response = await GetPorducts();
    if (response.length > 0) {
      setDataArray(response);
    }
    setLoading(false);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        dataArray.map((item) => (
          <ItemCard
            key={item.product_id}
            itemId={item.product_id}
            itemName={item.product_name}
            itemDescription={item.product_description}
            itemPrice={item.product_price}
            itemImage={item.product_image}
          />
        ))
      )}
    </div>
  );
}
