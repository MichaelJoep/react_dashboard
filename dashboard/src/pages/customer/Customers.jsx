import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import "./Customers.css";

const Customers = () => {
  return (
    <div className='customers'>
      <Sidebar />
      <div className="customersContainer">
        <Topbar />
      </div>
    </div>
  )
}

export default Customers;