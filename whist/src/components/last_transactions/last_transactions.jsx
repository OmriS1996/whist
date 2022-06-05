import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { GetTransactions } from "../../lib/api_calls/api_calls";

export default function LastTransactions(props) {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getApi() {
    setLoading(true);
    let response = await GetTransactions();
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
      <h4>Transactions from the last 5 days</h4>
      {dataArray.length > 0 ? (
        <ListGroup as="ol" numbered>
          {dataArray.map((item, index) => {
            return (
              <ListGroup.Item key={index} as="li">
                Date: <strong>{item.created}</strong>, Amount:{" "}
                <strong>{item.total}$</strong>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <div>{loading ? "loading" : "No transactions"}</div>
      )}
    </div>
  );
}
