import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';

import Filter from './components/Filter/Filter';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';

function App() {

  const numElementOnPage = 7;

  const [isLoading, setIsLoading]= useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(1);

  const [optionColumn, setOptionColumn] = useState("name");
  const [optionСondition, setOptionСondition] = useState(1);
  const [changeValue, setChangeValue] = useState("");

  const handleAdditionalFiltration = (item = page) => {
    switch (parseInt(optionСondition)) {
      case 0: 
      console.log('=')
        submitFilterRequest('=', item);
        break;
      case 1: 
        submitFilterRequest('', item);
        break;
      case 2:
        console.log('>')
        submitFilterRequest('>', item);
        break;
      case 3:
        console.log('<')
        submitFilterRequest('<', item);
        break;
      default:
        break;
    }
  }

  const submitFilterRequest = async (optionСondition, item) => {
    setIsLoading(true)
    let numPage = item;
    const sendData = {
      column: optionColumn,
      operation: optionСondition,
      value: changeValue
    }
    const filterDataLength = await Axios.post('http://localhost:3001/api/get/filterDataLength', sendData);
    if(filterDataLength.data.length === 0) {
      setSortedData([]);
      setNumberPages(0);
      setIsLoading(false);
    } else {
      const allElements = filterDataLength.data.length;
      const pages = Math.ceil(allElements / numElementOnPage);
      if(page > pages) {
        numPage = pages;
        setPage(pages);
      } else {
        setPage(item);
      }
      const { data } = await Axios.post(`http://localhost:3001/api/post/filterData/numElementOnPage/${numElementOnPage}/numPage/${numPage}`,sendData);
      setNumberPages(pages);
      setSortedData(data);
      setIsLoading(false);
    }
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
        isLoading={isLoading}
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
      />
    </main>
  );
}

export default App;
