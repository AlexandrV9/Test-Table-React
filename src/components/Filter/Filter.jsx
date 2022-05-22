import React from 'react';

import SelectList from './SelectList/SelectList';

import {
  dataSelectListForColumn,
  dataSelectListForСondition,
} from './constants';

import './Filter.css';


const Filter = () => {
  return (
    <div className='filter'>
      <p className='filter__title'>Фильтр</p>
      <form className='filter__form'>
        <SelectList dataSelect={dataSelectListForColumn} />
        <SelectList dataSelect={dataSelectListForСondition} />
        <div className='filter__wrapper-input-text'>
          <label>Ввод значения</label>
          <input className='filter__input-text' type="text" placeholder='значение...'/>
        </div>
        <button type='submit' className='filter__button-submit'>Отфильтровать</button>
        <button className='filter__button-reset'>Показать всё (Сброс фильтра)</button>
      </form>
    </div>
  )
}

export default Filter;