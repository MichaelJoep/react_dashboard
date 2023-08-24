import React, {useState} from 'react';
import { DataGrid } from "@mui/x-data-grid";
import {userColumns, userRows} from "../../dataSource";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Link} from "react-router-dom";
import "./Datatable.css";



const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    }

    const actionColumn = [
        {
            field: "action",
            headerName:"Action",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="action_cell">
                  <Link to={"/users/" + params.row.id}>
                    <button className="viewButton">View</button>
                  </Link>
                    <DeleteOutlineIcon className="deleteButton" 
                    onClick={()=> handleDelete(params.row.id)}
                    />
                </div>
              )
            }
        }
    ]
  return (
    <div className='datatable'>
     <div className="datatableTitle">
         <span>Add New User</span>
          <Link to="/newuser">
             <span className='new_link'>Add User</span>
          </Link>
     </div>
        <DataGrid 
        className='data_grid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
    />
  </div>
  )
}

export default Datatable