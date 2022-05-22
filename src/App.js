import React from 'react';

import './App.css';
import Filter from './components/Filter/Filter';

import Table from './components/Table/Table';

function App() {
  return (
    <main className='main-content'>
      <Table />
      <Filter />
    </main>
  );
}

export default App;
