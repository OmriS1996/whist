import ListGroup from "react-bootstrap/ListGroup";

export default function LastTransactions(props) {
  const mocData = [{ id: 1, date: 1653923953953, totalUsd: 1500 }];
  return (
    <div>
      <h4>Transactions from the last 5 days</h4>
      <ListGroup as="ol" numbered>
        {mocData.map((item) => {
          return (
            <ListGroup.Item key={item.id} as="li">
              Date: <strong>{new Date(item.date).toLocaleString()}</strong>,
              Amount: <strong>{item.totalUsd}$</strong>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
