import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Users = () => {
  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
    // Add logic to delete the user from the rows
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullname", headerName: "Full Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "age", headerName: "Age", type: "number", width: 100 },
    { field: "address", headerName: "Address", width: 300 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => handleDelete(params.row.id)}
        >
          <FaTrash />
        </button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      fullname: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      country: "USA",
      address: "123 Main St, New Yourk, Ny",
    },
    {
      id: 2,
      fullname: "Alice Brown",
      email: "alice.brown@example.com",
      age: 25,
      country: "Canada",
      address: "456 Maple Ave, Toronto, ON",
    },
    {
      id: 3,
      fullname: "Chris Evans",
      email: "chris.evans@example.com",
      age: 35,
      country: "USA",
      address: "789 Oak St, Houston, TX ",
    },
    {
      id: 4,
      fullname: "Laura Wilson",
      email: "laura.wilson@example.com",
      age: 28,
      country: "UK",
      address: "101 Pine Rd,London",
    },
    {
      id: 5,
      fullname: "Peter Parker",
      email: "peter.parker@example.com",
      age: 22,
      country: "USA",
      address: "202 Elm St, Phoenix,AZ",
    },
    {
      id: 6,
      fullname: "Tony Stark",
      email: "tony.stark@example.com",
      age: 48,
      country: "USA",
      address: "303 Ceder Blvd, Boston, MA",
    },
    {
      id: 7,
      fullname: "Bruce Wayne",
      email: "bruce.wayne@example.com",
      age: 40,
      country: "USA",
      address: "404 Birch Ln, Detroit, MI",
    },
    {
      id: 8,
      fullname: "Diana Prince",
      email: "diana.prince@example.com",
      age: 32,
      country: "USA",
      address: "505 Fir Ave, San Diego, CA",
    },
    {
      id: 9,
      fullname: "Natasha Romanoff",
      email: "natasha.romanoff@example.com",
      age: 29,
      country: "Russia",
      address: "606 Spruce St, Moscow",
    },
    {
      id: 10,
      fullname: "Scott Lang",
      email: "scott.lang@example.com",
      age: 37,
      country: "USA",
      address: "707 Willow Dr, Las Vegas, NV",
    },
  ];

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
        <Link to="/newuser">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
            New User
          </button>
          </Link>
      </div>
      <DataGrid rows={rows} columns={columns} checkboxSelection  />
    </div>
  );
};

export default Users;
