import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { GetTopUnique } from "../../lib/api_calls/api_calls";

export default function StatsUnique(props) {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getApi() {
    setLoading(true);
    let response = await GetTopUnique();
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
      <h4>Top 5 Unique Sold</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ListGroup as="ol" numbered>
          {dataArray.map((item) => {
            return (
              <ListGroup.Item key={item.product_id} as="li">
                <b>{item.product_name}</b>, Number Sold:{" "}
                <strong>{item.unique_sold}</strong>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
}
