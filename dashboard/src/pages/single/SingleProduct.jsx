import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ProductChart from '../../components/chart/ProductChart';
import Publish from "@mui/icons-material/Publish";
import {Link} from "react-router-dom";
import "./Single.css";


const SingleProduct = () => {
  return (
    <div className="singleProduct">
      <Sidebar />
      <div className="singleProductContainer">
        <Topbar />

        <div className="productContainer_Title">
          <h1 className="singleProductTitle">Product</h1>
          <Link to="/newProduct">
            <button className="addProBtn">Create</button>
          </Link>
        </div>
        <div className="productTop_content">
          <div className="productLeft">
            <ProductChart title="Sales Performance" aspect={ 2/1}/>
          </div>
          <div className="productRight">
            <div className="productInfoTop">
               <img src="/assets/engineoil2.jpg" alt="productImage" className='productInfoImg' />
               <span className='productName'>ENGINE OIL</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoBottomItem">
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>HJKDM063</span>
              </div>
              <div className="productInfoBottomItem">
                <span className='productInfoKey'>sales:</span>
                <span className='productInfoValue'>5289</span>
              </div>
              <div className="productInfoBottomItem">
                <span className='productInfoKey'>brand:</span>
                <span className='productInfoValue'>Turbo</span>
              </div>
              <div className="productInfoBottomItem">
                <span className='productInfoKey'>description:</span>
                <span className='productInfoValue'>BMW ENGINE OIL TWIN POWER</span>
              </div>
              <div className="productInfoBottomItem">
                <span className='productInfoKey'>stock:</span>
                <span className='productInfoValue'>in stock</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label htmlFor="prodname">Product Name</label>
              <input type="text" name='prodname' placeholder='Engine Oil'/>
              <label htmlFor="brand">brand</label>
              <select name="brand" id="brand">
                <option value="Turbo">Turbo</option>
                <option value="Platinum">Platinum</option>
              </select>
              <label htmlFor="stock">Stock</label>
              <select name="stock" id="stock">
                <option value="in stock">in stock</option>
                <option value="out of stock">out of stock</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="uploadImage">
                <img src="/assets/engineoil2.jpg" alt="productImage" className='prodImgBottom' />
                <label htmlFor="file">
                  <Publish className="publishUploadIcon"/>
                </label>
                <input type="file" id='file' style={{display: "none"}} />
              </div>
              <button className="productUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
     </div>
  )
}

export default SingleProduct