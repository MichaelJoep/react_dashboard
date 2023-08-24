import Front from "./pages/front/Front";
import Customers from "./pages/customer/Customers";
import SingleCustomer from "./pages/single/SingleCustomer";
import SingleProduct from "./pages/single/SingleProduct";
import SingleUser from "./pages/single/SingleUser";
import Products from "./pages/product/Products";
import Users from "./pages/users/Users";
import NewProduct from "./pages/new/NewProduct";
import NewUser from "./pages/new/NewUser";
import {createBrowserRouter,
         RouterProvider
        } from "react-router-dom";
import {userInputs} from "./formData";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import "./style/dark.css";


 const router = createBrowserRouter([
   {
     path:"/",
     element: <Front />
   },
   {
    path:"/customers",
    element: <Customers />
  },
  {
    path:"/customers/:customerId",
    element: <SingleCustomer/>
  },
  {
    path:"/products",
    element: <Products/>
  },
  
  {
    path:"/users",
    element: <Users/>
  },
  {
    path:"/users/:userId",
    element: <SingleUser/>
  },
  {
    path:"/newuser",
    element: <NewUser inputs={userInputs} title={"Add New User"}/>
  },
  {
    path:"/products/:productId",
    element: <SingleProduct/>
  },
  {
    path:"/newProduct",
    element: <NewProduct/>
  },
 ]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
