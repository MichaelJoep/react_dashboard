import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./productChart.css";

const data = [
  
  {
    name: 'October',
    sales: 1890,
  },
  {
    name: 'November',
    sales: 2390,
  },
  {
    name: 'December',
    sales: 3490,
  },
];

const ProductChart = ({ title, aspect}) => {
  return (
    <div className='productChart'>
      <div className="charts_title">{title}</div>
      <ResponsiveContainer width="100%" aspect={ aspect }>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="sales" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductChart;