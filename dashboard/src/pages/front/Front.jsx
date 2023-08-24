import React from 'react'
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import NewList from '../../components/list/NewList';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar';
import Widget from '../../components/widget/Widget';
import "./Front.css";

const Front = () => {
  return (
    <div className='front_page'>
        <Sidebar />
        <div className="front_container">
          <Topbar />
          <div className="widgets">
            <Widget type="customers"/>
            <Widget type="orders"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 7 months (Revenue)" aspect={2/1}/>
          </div>
          <div className="list_container">
            <NewList />
            <List />
          </div>
        </div>
    </div>
  )
}

export default Front