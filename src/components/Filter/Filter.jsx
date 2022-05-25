import React, { useState } from 'react';

import SelectList from './SelectList/SelectList';

import {
  dataSelectListForColumn,
  dataSelectListForСondition,
} from './constants';

import './Filter.css';


const Filter = ({
  data,
  sortedData,
  setSortedData,
}) => {

  const [selectColumn, setSelectColumn] = useState(dataSelectListForColumn);
  const [selectСondition, setSelectСondition] = useState(dataSelectListForСondition);
  const [typeInput, setTypeInput] = useState('text');

  const [optionColumn, setOptionColumn] = useState(0);
  const [optionСondition, setOptionСondition] = useState(1);
  const [changeValue, setChangeValue] = useState('');

  const handleChangeText = (event) => { setChangeValue(event.target.value) }

  const handleFiltration = (event) => {
    event.preventDefault();
    let currentSortedData;
    switch(optionСondition){
      case 0:
        currentSortedData = data.filter((item) => {
          switch(optionColumn) {
            case 0: {
              return item;
            }
            case 1: {
              return item.number === parseInt(changeValue)
            }
            case 2: {
              return item.distance === parseInt(changeValue)
            }
            default: {
              return item;
            }
          }
          
        });
        setSortedData(currentSortedData);
        break;
      case 1:
        let regExp = new RegExp(changeValue, 'gi');
        currentSortedData = data.filter((item) => {
          return regExp.test(item.name);
        });
        setSortedData(currentSortedData);
        break;
      case 2:
        currentSortedData = data.filter((item) => {
          switch(optionColumn) {
            case 0: {
              return item;
            }
            case 1: {
              return item.number > parseInt(changeValue)
            }
            case 2: {
              return item.distance > parseInt(changeValue)
            }
            default: {
              return item;
            }
          }
        });
        setSortedData(currentSortedData);
        break;
      case 3:
        currentSortedData = data.filter((item) => {
          switch(optionColumn) {
            case 0: {
              return item;
            }
            case 1: {
              return item.number < parseInt(changeValue)
            }
            case 2: {
              return item.distance < parseInt(changeValue)
            }
            default: {
              return item;
            }
          }
        });
        console.log(currentSortedData)
        setSortedData(currentSortedData);
        break;
      default: break;
    }
  }

  const handleClickOption = (option, selectName) => {
    switch(option){
      case 0: {
        setSelectСondition((currentData) => {
          setOptionСondition(1);
          setTypeInput('text');
          return {
            ...currentData,
            listOptions: currentData.listOptions.map((item, index) => {
              if(index === 1){
                return {
                  ...item, 
                  isAvailable: true
                }
              } else {
                return {
                  ...item,
                  isAvailable: false
                }
              }
            })
          }
        })
        break;
      }
      case 1:
      case 2: {
        setSelectСondition((currentData) => {
          setTypeInput('number')
          if(optionСondition === 1) {
            setOptionСondition(0);
          }
          return {
            ...currentData,
            listOptions: currentData.listOptions.map((item, index) => {
              return index === 1 ? {
                ...item,
                isAvailable: false
              } : {
                ...item,
                isAvailable: true
              }
            })
          }
        })
        break;
      }
      default: 
        break;
    }
  }

  return (
    <div className='filter'>
      <p className='filter__title'>Фильтр</p>
      <form className='filter__form' onSubmit={handleFiltration}>
        <SelectList 
          dataSelect={selectColumn} 
          selectOption={optionColumn}
          setOption={setOptionColumn}
          onClickOption={handleClickOption}
          setChangeValue={setChangeValue}
          changeValue={changeValue}
        />
        <SelectList 
          dataSelect={selectСondition} 
          selectOption={optionСondition}
          setOption={setOptionСondition}
          onClickOption={handleClickOption}
          setChangeValue={setChangeValue}
          changeValue={changeValue}
        />
        <div className='filter__wrapper-input-text'>
          <label>Ввод значения</label>
          <input 
            className='filter__input-text' 
            type={typeInput} 
            placeholder='значение...'
            value={changeValue}
            onChange={handleChangeText}
          />
        </div>
        <button type="submit" className='filter__button-submit'>Отфильтровать</button>
        <button type="button" className='filter__button-reset'>Показать всё (Сброс фильтра)</button>
      </form>
    </div>
  )
}

export default Filter;