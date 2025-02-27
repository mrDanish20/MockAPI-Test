import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function DataInTable() {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  let [show, setShow] = useState(false);
  let [msg, setMsg] = useState("");
  let [sortOrder, setSortOrder] = useState(""); 
  useEffect(() => {
    axios
      .get("https://67b0235fdffcd88a67886e99.mockapi.io/Careembooking")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show]);

 
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Data Table</h2>
      <Link to="/" className="btn btn-danger my-3">Add Ride +</Link>

      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

     
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort: Ascending</option>
          <option value="desc">Sort: Descending</option>
        </select>
      </div>

      {show && <div className="alert alert-success">{msg}</div>}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PickUp</th>
            <th>DropOff</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.pickup}</td>
              <td>{a.dropoff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
