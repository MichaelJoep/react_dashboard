import React, { useContext } from 'react';
import "./Topbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Switch from "@mui/material/Switch";
import FullScreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutline";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from '../../context/darkModeContext';


const Topbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='topbar'>
      <div className="topbar_container">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
       <div className="items">
         <div className="item">
         <LanguageOutlinedIcon className="icon" />
           <span className='item_text'>English</span>
         </div>
         <div className="item">
           <Switch style={{color: "#210876"}} className="icon" onClick={()=> dispatch({type: "TOGGLE"})}/>
         </div>
         <div className="item">
           <FullScreenOutlinedIcon className="icon" />
         </div>
         <div className="item">
           <NotificationsActiveOutlinedIcon className="icon" />
           <div className="counter">2</div>
         </div>
         <div className="item">
           <ChatBubbleOutlinedIcon className="icon" />
           <div className="counter">4</div>
         </div>
         <div className="item">
           <ListOutlinedIcon className="icon" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar