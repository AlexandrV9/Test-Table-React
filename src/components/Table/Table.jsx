import React from 'react';

import TableRow from './TableRow/TableRow';

import './Table.css';

const Table = ({ sortedData }) => {
  return (
    <table className='table'>
      <thead className='table__head'>
        <tr className='table__row'>
          <th className='table__head-item'>Дата</th>
          <th className='table__head-item'>Название</th>
          <th className='table__head-item'>Количество</th>
          <th className='table__head-item'>Расстояние</th>
        </tr>
      </thead>
      <tbody className='table__body'>
      {
        sortedData.map((item, index) => {
        return <TableRow key={index} dataItem={item} />
        })
      }
      </tbody>
    </table>
  )
  
}

export default Table;