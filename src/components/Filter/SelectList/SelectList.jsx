import React from 'react';

import './SelectList.css';

const SelectList = ({ dataSelect }) => {
  return (
    <div className='select-list__wrapper'>
      <label className='select-list-wrapper__label'>{dataSelect.nameSelect}</label>
      <select className='select-list'>
      {
        dataSelect.listOptions.map((nameOption, index) => {
          return <option value={index} key={index}>{nameOption}</option>
        })
      }
    </select>
    </div>   
  )
}

export default SelectList;