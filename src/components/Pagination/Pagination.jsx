import React, { useMemo } from 'react';

import './Pagination.css';


const Pagination = () => {
  const page = 5
  const pages = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },[]);
  // const maxPages = 5;

  return (
    <div className='pagination'>
      <div className='pagination__button-prev'>
        Prev
      </div>
      <div className='pagination__pages-wrapper'>
        {pages.map((item) => (
          <div
            className={
              page === item ? 'pagination__page-item_active' : 'pagination__page-item'
            }
            // onClick={() => onChangePage(item)}
            key={item}
          >
          {item}
          </div>
        ))}
      </div>
      <div className='pagination__button-next'>
        Next
      </div>
    </div>
  );
}

export default Pagination;