import React from 'react';
import ReactLoading from 'react-loading';

import TableRow from './TableRow/TableRow';

import './Table.css';

const Table = ({ 
  sortedData, 
  isLoading 
}) => {

  console.log(isLoading)

  const createTableRowMarkup = () => {
    return sortedData.map((item, index) => <TableRow key={index} dataItem={item}/>);
  }

  const createNothingFoundMarkup = () => {
    return (
      <tr className='table__row-nothing-found'>
        <td colSpan="4" className='table__td-nothing-found'>Упс! Ничего не найдено :(</td>
      </tr>
    );
  }

  const createPreloaderMarkup = () => {
    return (
      <tr className='table__row-preloader'>
        <td colSpan="4" className='table__td-preloader'>
          <ReactLoading 
            type={'bars'} 
            color={''} 
            height={80} 
            width={80} 
            className='table__preloader'
          />
        </td>
      </tr>
    )
  }

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
        isLoading ? createPreloaderMarkup() : ((sortedData && sortedData.length > 0) ? 
        createTableRowMarkup() : createNothingFoundMarkup() )
      }
      </tbody>
    </table>
  )
  
}

export default Table;