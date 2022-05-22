import React from 'react';

import './TableCell.css';

const TableCell = ({ dataCell }) => {
  return <td className='table__cell'>{dataCell}</td>
}

export default TableCell;