import React from 'react';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Featured.css";
import ChangingProgressProvider from './ChangingProgressProvider';
import {CircularProgressbar,
        buildStyles
    } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured_top">
            <h1 className="featured_title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
        </div>
        <div className="featured_bottom">
            <div className="featuredChart">
                <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
                    {(percentage) => (
                        <CircularProgressbar 
                        value = {percentage}
                        text = {`${percentage}%`}
                        styles={buildStyles({
                            pathTransitionDuration: 0.90,
                            trailColor: "#82ca9d",
                            textColor: "#616161",
                            pathColor: "#210876"
                        })}
                        />
                    )}
                </ChangingProgressProvider>
            </div>
            <p className="featured_sales">Total Sales made today</p>
            <p className="featured_amount">$3450.50</p>
            <p className="featured_desc">Previous transactions</p>
            <div className="featured_summary">
                <div className="featured_items">
                    <div className="item_title">Target</div>
                    <div className="item_result positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="result_amount">18.6k</div>
                    </div>
                </div>
                <div className="featured_items">
                    <div className="item_title">Last Week</div>
                    <div className="item_result negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="result_amount">45.6k</div>
                    </div>
                </div>
                <div className="featured_items">
                    <div className="item_title">Last Month</div>
                    <div className="item_result positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="result_amount">88.60k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured;