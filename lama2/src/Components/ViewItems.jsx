import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import EditItem from './EditItem';

export default function ViewItems() {
  const [viewItems, setViewItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/items/all",{headers:{"Content-Type" : "application/json", Authorization : `Bearer ${sessionStorage.getItem("authToken")}`}})
      .then(response => setViewItems(response.data))
      .catch(err => {
        setError(err.message);
        console.log("Error fetching items:", err.message);
      });
  }, []);

  function handleDelete(itemId) {
    axios.delete("http://localhost:8081/items/" + itemId,
    {headers:{"Content-Type" : "application/json", Authorization : `Bearer ${sessionStorage.getItem("authToken")}`}})
      .then(response => {
        console.log("Item Deleted !!");
        setViewItems(prevItems => prevItems.filter(item => item.id !== itemId));
      })
      .catch(err => {
        setError(err.message);
        console.log("Error deleting item:", err.message);
      });
  }

  function handleEdit(itemId){
    window.location.href = "http://localhost:3000/editCustomer?id=" + itemId;
  }
    

    return (
    <>
      <h3 align="middle" className="mt-3 fw-bolder">Available Item Details</h3>
      <h5 align="middle" className="py-1">Efficiency Unleashed: Masterful Items Management Simplified</h5>
      <hr />
      <MDBTable align='middle' className="container" striped hover>
        <MDBTableHead>
          <tr>
            <th scope='col'>Item Id</th>
            <th scope='col'>Description</th>
            <th scope='col'>Issue Status</th>
            <th scope='col'>Item Make</th>
            <th scope='col'>Item Category</th>
            <th scope='col'>Item Valuation</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {viewItems.map(item => {
            const { id, description, issue_status, make, category, value } = item;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{description}</td>
                <td>{issue_status}</td>
                <td>{make}</td>
                <td>{category}</td>
                <td>{value}</td>
                <td>
                  <MDBBtn outline color='warning' rounded size='sm' onClick={() => handleEdit(id)}>
                    Edit
                  </MDBBtn>
                </td>
                <td>
                  <MDBBtn outline color='danger' rounded size='sm' onClick={() => handleDelete(id)}>
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
