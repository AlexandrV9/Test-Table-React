import React, { useState } from 'react';

import './App.css';

import Filter from './components/Filter/Filter';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';

const data = [
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  },
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  }, 
  {
    date: '25.02.2020', 
    name: 'Поездка в Турцию',
    number: 2,
    distance: 1539,
  },
  {
    date: '20.01.2015', 
    name: 'Поездка в Японию',
    number: 1,
    distance: 4030,
  },
  {
    date: '02.01.2007', 
    name: 'Поездка в Австралию',
    number: 5,
    distance: 9050,
  }
];

function App() {

  const [sortedData, setSortedData] = useState(data);

  return (
    <main className='main-content'>
      <Table sortedData={sortedData} />
      <Pagination />
      <Filter 
        data={data} 
        sortedData={sortedData} 
        setSortedData={setSortedData} 
      />
    </main>
  );
}

export default App;
