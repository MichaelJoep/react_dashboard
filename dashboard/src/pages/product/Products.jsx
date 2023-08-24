import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ProductTable from "../../components/producttable/ProductTable";
import {Link} from "react-router-dom";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <Sidebar />

      <div className="productsContainer">
        <Topbar />
        <div className="productList">
          <div className="productTitle">
            <span>Add New Product</span>
            <Link to="/newProduct">
              <span className="new_link">Add Product</span>
            </Link>
          </div>
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default Products