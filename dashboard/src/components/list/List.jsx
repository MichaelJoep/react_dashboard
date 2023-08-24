import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import "./List.css";


const rows = [
    {
        id: 2117383933399,
        image: "../../assets/engineoil.jpg",
        customer: "Lee Martin",
        date: "27th September",
        amount: 300,
        status: "Approved",
      },
      {
        id: 6617772543119,
        image: "../../assets/Tv.jpg",
        customer: "Sebastian Walker",
        date: "5th February",
        amount: 100,
        status: "Declined",
      },
      {
        id: 200116351133,
        image: "../../assets/gascooker.jpg",
        customer: "Lopez Williams",
        date: "1st June",
        amount: 200,
        status: "Approved",
      },
      {
        id: 22567721541,
        image: "../../assets/speaker.jpg",
        customer: "Alexander White",
        date: "21st August",
        amount: 160,
        status: "Pending",
      },
      {
        id: 2117383933399,
        image: "../../assets/laptop2.jpg",
        customer: "Garcia Davis",
        date: "16th February",
        amount: 570,
        status: "Approved",
      },
      {
        id: 4520015619,
        image: "../../assets/iphone.webp",
        customer: "Camila Michael",
        date: "20th March",
        amount: 1800,
        status: "Approved",
      },
      {
        id: 25566001527,
        image: "../../assets/bag.jpg",
        customer: "Madison Anthony",
        date: "3rd October",
        amount: 20,
        status: "Pending",
      },
      {
        id: 2117383933399,
        image: "../../assets/freepod.jpg",
        customer: "Natalie King",
        date: "29th December",
        amount: 370,
        status: "Approved",
      },
      
  ];

const List = () => {
  return (
    <div className='list'>
        <div className="list_title">Latest Transactions</div>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell className='tableCell'>
            <div className="tableRow">
              ID
            </div>
            </TableCell>
          <TableCell className='tableCell'>
            <div className="tableRow">
                Image
             </div>
            </TableCell>
            <TableCell className='tableCell'>
              <div className="tableRow">
                  Customer
              </div>  
            </TableCell>
            <TableCell className='tableCell'>
              <div className="tableRow">
                  Date
              </div>
            </TableCell>
            <TableCell className='tableCell'>
              <div className="tableRow">
                  Amount
              </div>
            </TableCell>
            <TableCell className='tableCell'>
              <div className="tableRow">
                 Status
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>
                <div className="cellwrapper">
                  {row.id}
                </div>
              </TableCell>
             <TableCell className='tableCell'>
                  <div className="cellwrapper">
                      <img src={row.image} alt="list" className='list_img'/>
                  </div>
                </TableCell>
              <TableCell className='tableCell'>
                <div className="cellwrapper">
                   {row.customer}
                  </div>
                </TableCell>
              <TableCell className='tableCell'>
                <div className="cellwrapper">
                   {row.date}
                </div>
               </TableCell>
              <TableCell className='tableCell'>
                <div className="cellwrapper">
                   ${row.amount}
                 </div>
                </TableCell>
              <TableCell className='tableCell'>
                <div className="cellwrapper">
                <span className={`status ${row.status}`}>
                   {row.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List