import Table from "react-bootstrap/Table";
import AddItemAdmin from "../add_item_admin/add_item_admin";
import DeleteItemAdmin from "../delete_item_admin/delete_item_admin";
import "bootstrap/dist/css/bootstrap.css";
import "./admin_table.css";

export default function AdminTable() {
  const arrayHeaders = ["Name", "Description", "Price", "Image", "Edit/Delete"];
  const mocData = [
    {
      id: 1,
      name: "Nutella",
      description: "750g hazelnut spread with cocoa",
      price: 5,
      image:
        "https://cdnx.jumpseller.com/hercules-it-llc/image/17110157/Nutella.jpg?1623999446",
    },
  ];
  return (
    <div>
      <div>
        <AddItemAdmin />
      </div>
      <div>
        <Table responsive="md" striped={true} bordered={true} hover={true}>
          <thead>
            <tr>
              <th>#</th>
              {arrayHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mocData.map((item, index) => (
              <tr key={item.id}>
                {Object.keys(item).map((objKey, index) => (
                  <td>
                    {objKey === "id" ? (
                      index + 1
                    ) : objKey === "price" ? (
                      item[objKey] + "$"
                    ) : objKey === "image" ? (
                      <img src={item[objKey]} alt={item.description} />
                    ) : (
                      item[objKey]
                    )}
                  </td>
                ))}
                <td>
                  <DeleteItemAdmin itemId={item.id} itemName={item.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
