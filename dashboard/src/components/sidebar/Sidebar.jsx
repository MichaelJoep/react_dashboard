import React from 'react';
import "./Sidebar.css";
import defaultPic from "../../assets/person/DefaultProfile.jpg"
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutline"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import CalenderMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import {Link} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
       <div className='top'>
           <span className='logo'>MKProductX</span>
       </div>
      </Link> 
    <hr />
      <div className="profile-pic">
        <img src={defaultPic} alt="default_pic" className='profileImage' />
          <h3>Michael J</h3>
          <p>Snr Project Admin</p>
      </div>
        
        <div className='bottom'>
          <ul>
            <p className='title'>MAIN</p>
            <Link to="/">
              <li>
                <DashboardIcon  className='icon'/>
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="/analytics">
              <li>
                <TimelineIcon  className='icon'/>
                <span>Analytics</span>
              </li>
             </Link>

             <Link to="/sales">
              <li>
                <TrendingUpIcon  className='icon'/>
                <span>Sales</span>
              </li>
              </Link>
              <p className='title'>LIST</p>
              <Link to="/users">
                 <li>
                  <Person3OutlinedIcon className='icon'/>
                  
                     <span>Users</span>
                  
                 </li>
                </Link>
            <Link to="/customers">
              <li>
                <PeopleAltOutlinedIcon className='icon'/>
                <span>Customers</span>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <LocalGroceryStoreOutlinedIcon className='icon'/>
                <span>Products</span>
              </li>
            </Link>
            <Link to="/transactions"> 
              <li>
                <MonetizationOnOutlinedIcon className='icon'/>
                <span>Transactions</span>
              </li>
            </Link>
            <Link to="/orders">
              <li>
                <CreditCardOutlinedIcon className='icon'/>
                <span>Orders</span>
              </li>
            </Link>
              <p className='title'>INFORMATION</p>

            <Link to="/notifications">
              <li>
                <NotificationsActiveOutlinedIcon className='icon'/>
                <span>Notifications</span>
              </li>
            </Link>

            <Link to="/mail">
              <li>
                <MailOutlinedIcon className='icon'/>
                <span>Mail</span>
              </li>
            </Link>
            <Link to="/feedback">
              <li>
                <DynamicFeedIcon  className='icon'/>
                <span>Feedback</span>
              </li>
            </Link>
            <Link to="/messages">
              <li>
                <ChatBubbleOutlinedIcon className='icon'/>
                <span>Messages</span>
              </li>
            </Link>  
              <p className='title'>SERVICE</p>

            <Link to="/system">
              <li>
                <DnsOutlinedIcon className='icon'/>
                <span>System Health</span>
              </li>
            </Link>

            <Link to="/settings">  
              <li>
                <SettingsOutlinedIcon className='icon'/>
                <span>Settings</span>
              </li>
            </Link>
              <p className='title'>CHARTS</p>

            <Link to="/stats">
              <li>
                <InsertChartOutlinedSharpIcon className='icon'/>
                <span>Stats</span>
              </li>
            </Link>  
              <p className='title'>USER INTERFACE</p>
            <Link to="/profile"> 
              <li>
                <ManageAccountsOutlinedIcon className='icon'/>
                <span>Profile</span>
              </li>
            </Link>
            <Link to="/calendar">
              <li>
                <CalenderMonthOutlinedIcon className='icon'/>
                <span>Calendar</span>
              </li>
            </Link> 
            <Link to="/helper"> 
              <li>
                <DiamondOutlinedIcon className='icon'/>
                <span>Helper</span>
              </li>
            </Link>
            <Link to="/logout">  
              <li>
                <ExitToAppOutlinedIcon className='icon'/>
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar