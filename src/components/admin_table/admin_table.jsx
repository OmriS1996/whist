import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import AddItemAdmin from "../add_item_admin/add_item_admin";
import DeleteItemAdmin from "../delete_item_admin/delete_item_admin";
import EditItemAdmin from "../edit_item_admin/edit_item_admin";
import { GetPorducts } from "../../lib/api_calls/api_calls";
import "./admin_table.css";

export default function AdminTable() {
  const [loading, setLoading] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const arrayHeaders = ["Name", "Description", "Price", "Image", "Edit/Delete"];

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
      <div>
        <AddItemAdmin />
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
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
              {dataArray.map((item, index) => (
                <tr key={item.id}>
                  {Object.keys(item).map((objKey) => (
                    <td>
                      {objKey === "product_id" ? (
                        index + 1
                      ) : objKey === "product_price" ? (
                        item[objKey] + "$"
                      ) : objKey === "product_image" ? (
                        <img src={item[objKey]} alt={item.description} />
                      ) : (
                        item[objKey]
                      )}
                    </td>
                  ))}
                  <td>
                    <EditItemAdmin
                      itemId={item.product_id}
                      itemName={item.product_name}
                      itemDescription={item.product_description}
                      itemPrice={item.product_price}
                      itemImageLink={item.product_image}
                    />
                    <DeleteItemAdmin
                      itemId={item.product_id}
                      itemName={item.product_name}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}
