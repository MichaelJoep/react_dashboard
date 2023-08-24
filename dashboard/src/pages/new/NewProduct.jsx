import React, {useState} from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
import "./NewProduct.css";

const NewProduct = () => {
  const [file, setFile] = useState(null);

  return (
    <div className='newProduct'>
      <Sidebar />

      <div className="newProductContainer">
        <Topbar />
        <div className="newProductTop">
          <h1>Add New Product</h1>
        </div>
        <div className="newProductBottom">
          <div className="newProductLeft">
            <img src={file ? URL.createObjectURL(file) 
            : "/assets/person/DefaultProfile.jpg"} 
            alt="defaultProduct" 
            className='newDefaultImg'
            />
          </div>

          <div className="newProductRight">
            <form className="newFormContainer">
              <div className="newFormInput">
                <label htmlFor="file">
                   Image: <DriveFolderUploadOutlined className='newDriveIcon'/>
                </label>
                <input type="file" id='file' 
                style={{display: "none"}}
                onChange={(e)=>setFile(e.target.files[0])}/>
              </div>

              <div className="newFormInput">
                <label htmlFor="name">Description</label>
                <input type="text" id='name' placeholder='Description' />
              </div>

              <div className="newFormInput">
                <label htmlFor="price">Price</label>
                <input type="text" id='price' placeholder='100' />
              </div>

              <div className="newFormInput">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' placeholder='Iphone 14 Max Pro' />
              </div>

              <div className="newFormInput">
                <label htmlFor="cat">Category</label>
                <input type="text" id='cat' placeholder='Computers' />
              </div>

              <div className="newFormInput">
                 <label htmlFor="stock">Stock</label>
                 <input type="text" id='stock' placeholder='in stock' />
              </div>
              <button className='newProductBtn'>Submit</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewProduct