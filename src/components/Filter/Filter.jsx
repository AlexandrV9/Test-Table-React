import React, { useState } from "react";

import SelectList from "./SelectList/SelectList";

import {
  dataSelectListForColumn,
  dataSelectListForСondition,
} from "./constants";

import "./Filter.css";

const Filter = ({
  setChangeValue,
  optionСondition,
  optionColumn,
  changeValue,
  setOptionColumn,
  setOptionСondition,
  handleAdditionalFiltration,
}) => {

  const [selectСondition, setSelectСondition] = useState(dataSelectListForСondition);
  const [typeInput, setTypeInput] = useState("text");

  const handleChangeText = (event) => {
    setChangeValue(event.target.value);
  };

  const handleFiltration = (event) => {
    console.log('НАЖАЛИ НА КНОПКУ ФИЛЬТРАЦИИ!!!!!!!')
    event.preventDefault();
    handleAdditionalFiltration();
  };

  const handleClickOption = (option) => {
    switch (option) {
      case "name": {
        setSelectСondition((currentData) => {
          setOptionСondition(1);
          setTypeInput("text");
          return {
            ...currentData,
            listOptions: currentData.listOptions.map((item, index) => {
              if (index === 1) {
                return {
                  ...item,
                  isAvailable: true,
                };
              } else {
                return {
                  ...item,
                  isAvailable: false,
                };
              }
            }),
          };
        });
        break;
      }
      case "number":
      case "distance": {
        setSelectСondition((currentData) => {
          setTypeInput("number");
          if (optionСondition === 1) {
            setOptionСondition(0);
          }
          return {
            ...currentData,
            listOptions: currentData.listOptions.map((item, index) => {
              return index === 1
                ? {
                    ...item,
                    isAvailable: false,
                  }
                : {
                    ...item,
                    isAvailable: true,
                  };
            }),
          };
        });
        break;
      }
      default:
        break;
    }
  };


  return (
    <div className="filter">
      <form className="filter__form" onSubmit={handleFiltration}>
        <div className="filter__wrapper-switch">
          <p className="filter__title">Фильтр</p>
        </div>
        <fieldset 
          className="filter__fieldset" 
        >
          <SelectList
            dataSelect={dataSelectListForColumn}
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
          <div className="filter__wrapper-input-text">
            <label>Ввод значения</label>
            <input
              className="filter__input-text"
              type={typeInput}
              placeholder="значение..."
              value={changeValue}
              onChange={handleChangeText}
            />
          </div>
          <button type="submit" className="filter__button-submit">
            Отфильтровать
          </button>
          <button type="button" className="filter__button-reset">
            Показать всё (Сброс фильтра)
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Filter;
