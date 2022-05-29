import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';

import Filter from './components/Filter/Filter';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';

import { getFilteredData } from './utils/api';

function App() {

  const numElementOnPage = 7;

  // const [isLoading, setIsLoading]= useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(1);

  const [optionColumn, setOptionColumn] = useState("name");
  const [optionСondition, setOptionСondition] = useState(1);
  const [changeValue, setChangeValue] = useState("");

  const handleAdditionalFiltration = (item = page) => {
    const transmittedData = { 
      page, 
      numElementOnPage, 
      optionColumn, 
      changeValue,   
      setSortedData,
      setNumberPages,
      setPage
    }
    switch (parseInt(optionСondition)) {
      case 0: 
        getFilteredData('=', item, transmittedData);
        break;
      case 1: 
        getFilteredData('', item, transmittedData);
        break;
      case 2:
        getFilteredData('>', item, transmittedData);
        break;
      case 3:
        getFilteredData('<', item, transmittedData);
        break;
      default:
        break;
    }
  }

  const handleResetButtonClick = (event) => {
    const transmittedData = { 
      page: 1, 
      numElementOnPage, 
      optionColumn: "name", 
      changeValue: '',   
      setSortedData,
      setNumberPages,
      setPage
    }
    event.preventDefault();
    setOptionColumn('name');
    setOptionСondition(1);
    setChangeValue('');
    getFilteredData('=', 1, transmittedData)
  }

  const handleClickPrev = () => {
    setPage((currentPage) => {
      if(currentPage < 6) {
        handleAdditionalFiltration(1);
        return 1
      }
      handleAdditionalFiltration(currentPage - 4);
      return currentPage - 4;
    });
  }

  const handleClickNext = () => {
    setPage((currentPage) => {
      if(numberPages < 5) {
        handleAdditionalFiltration(numberPages);
        return numberPages;
      }
      if((numberPages - currentPage) < 4) {
        handleAdditionalFiltration(currentPage + (numberPages - currentPage));
        return currentPage + (numberPages - currentPage);
      }
      handleAdditionalFiltration(currentPage + 4)
      return currentPage + 4;
    });
  }

  useEffect(() => {
    handleAdditionalFiltration();
  },[])

  return (
    <main className='main-content'>
      <Table 
        sortedData={sortedData} 
        // isLoading={isLoading}
      />
      <Pagination 
        numberPages={numberPages} 
        page={page}
        setPage={setPage}
        handleAdditionalFiltration={handleAdditionalFiltration}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
      <Filter 
        optionColumn={optionColumn}
        setOptionColumn={setOptionColumn}
        optionСondition={optionСondition}
        setOptionСondition={setOptionСondition}
        changeValue={changeValue}
        setChangeValue={setChangeValue}
        handleAdditionalFiltration={handleAdditionalFiltration}
        handleResetButtonClick={handleResetButtonClick}
      />
    </main>
  );
}

export default App;
