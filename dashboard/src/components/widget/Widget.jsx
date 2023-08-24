import React from 'react';
import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {

    let data;
    //temp values
    const amount = 900;
    const diff = 50;

    switch(type) {
        case "customers":
            data = {
                title: "CUSTOMERS",
                isMoney: false,
                link: "See details",
                widget_icon: (
                  <PersonOutlineOutlinedIcon className="widget_icon" style={{color: "crimson", backgroundColor: "#ff000033", borderRadius: "50px"}}/>
                )
            };
            break;
        case "orders":
          data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            widget_icon: (
              <ShoppingCartOutlinedIcon className="widget_icon" style={{color: "goldenrod", backgroundColor: "#daa52033", borderRadius: "50px"}}/>
            )
          };
          break;
        case "earnings":
          data = {
            title: "TOTAL EARNINGS",
            isMoney: true,
            link: "View net eranings",
            widget_icon: (
              <MonetizationOnOutlinedIcon className="widget_icon" style={{color: "green", backgroundColor: "#00800033", borderRadius: "50px"}}/>
            )
          };
          break; 
        case "balance":
          data = {
            title: "MY BALANCE",
            isMoney: true,
            link: "See balance",
            widget_icon: (
              <AccountBalanceWalletOutlinedIcon className="widget_icon" style={{color: "purple", backgroundColor: "#80008033", borderRadius: "50px"}}/>
            )
          };
          break;
          
        default:
          break;
    }

  return (
    <div className='widget'>
        <div className="item_left">
            <span className='title'>{data.title}</span>
            <span className='left_counter'>{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="item_right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff}%
            </div>
          {data.widget_icon}
        </div>
    </div>
  )
}

export default Widget