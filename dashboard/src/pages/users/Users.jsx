import React from 'react';
import Datatable from '../../components/datatable/Datatable';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Users.css";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />

      <div className="usersContainer">
        <Topbar />

         <Datatable />
      </div>
     
    </div>
  )
}

export default Users;