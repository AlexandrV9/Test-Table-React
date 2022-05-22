import React from 'react';

import TableCell from '../TableCell/TableCell';

import './TableRow.css';

const TableRow = ({ dataItem }) => {

  const { date, name, number, distance} = dataItem;

  return (
    <tr className='table__tr'>
      <TableCell dataCell={date}/>
      <TableCell dataCell={name}/>
      <TableCell dataCell={number}/>
      <TableCell dataCell={distance}/>
    </tr>
  )
}

export default TableRow;