import React from 'react';

import './App.css';

import Filter from './components/Filter/Filter';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <main className='main-content'>
      <Table />
      <Pagination />
      <Filter />
    </main>
  );
}

export default App;
