import React from 'react';

import './SelectList.css';

const SelectList = ({ 
  dataSelect, 
  setOption, 
  selectOption, 
  onClickOption,
  setChangeValue,
  changeValue
}) => {
  
  const handleSelectOption = (event) => { 
    if(event.target.name === 'Выбор колонки' && !(parseInt(event.target.value) === 0)) {
      if(/\D+/.test(changeValue)){
        setChangeValue(0)
      }
    }
    setOption(parseInt(event.target.value));
    onClickOption(parseInt(event.target.value), dataSelect.name);
  }
  
  return (
    <div className='select-list__wrapper'>
      <label className='select-list-wrapper__label'>{dataSelect.nameSelect}</label>
      <select 
        className='select-list' 
        value={selectOption} 
        onChange={handleSelectOption}
        name={dataSelect.nameSelect}
      >
      {
        dataSelect.listOptions.map((option, index) => {
          return (
            <option
              key={index}  
              value={index} 
              disabled={!option.isAvailable} 
            >
              {option.name}
            </option>
          )
        })  
      }
    </select>
    </div>   
  )
}

export default SelectList;