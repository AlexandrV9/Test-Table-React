import React from 'react';

import TableRow from './TableRow/TableRow';

import './Table.css';

const data = [
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  }, 
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  }
];

const Table = () => {
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
        data.map((item, index) => {
        return <TableRow key={index} dataItem={item} />
        })
      }
      </tbody>
    </table>
  )
  
}

export default Table;