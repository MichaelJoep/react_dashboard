import React, {useState} from 'react';
import { DataGrid } from "@mui/x-data-grid";
import {productColumns, productRows} from "../../dataSource";
import {Link} from "react-router-dom";
import "./ProductTable.css";



const ProductTable = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionBtn">
            <Link to={"/products/" + params.row.id}>
              <button className="editButton">Edit</button>
            </Link>
            <button className="deleteBtn" onClick={()=>handleDelete(params.row.id)}>
              Delete
            </button>
          </div>
        );
      },
    },
  ]

  return (
    <div className="productable">
    
       <DataGrid 
        className='dataGrid'
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductTable