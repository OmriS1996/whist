import ListGroup from "react-bootstrap/ListGroup";

export default function StatsUnique(props) {
  const mocData = [{ id: 1, name: "Nutella", total: 200 }];
  return (
    <div>
      <h4>Top 5 Unique Sold</h4>
      <ListGroup as="ol" numbered>
        {mocData.map((item) => {
          return (
            <ListGroup.Item key={item.id} as="li">
              <b>{item.name}</b>, Number Sold: <strong>{item.total}</strong>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
