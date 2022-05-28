import React, { useMemo } from 'react';

import './Pagination.css';


const Pagination = ({
  numberPages,
  page,
  handleAdditionalFiltration,
  handleClickNext,
  handleClickPrev
}) => {

  const maxPages = 5;

  const pages = useMemo(() => {
    const arr = [];
    if(numberPages < maxPages) {
      for(let i=1; i<=numberPages; i++){
        arr.push(i);
      } 
    } else if((numberPages - page) <= Math.trunc(maxPages / 2)) {
      for(let i=(numberPages - (maxPages - 1)); i<=numberPages; i++){
        arr.push(i);
      } 
    } else if(page < (maxPages - Math.trunc(maxPages / 2))) {
      for(let i=1; i<=maxPages; i++){
        arr.push(i);
      } 
    } else {
      for(let i=(page - Math.trunc(maxPages / 2)); i<=(page + Math.trunc(maxPages / 2)); i++){
        arr.push(i);
      } 
    }
    return arr;

  },[numberPages, page]);

  const handleClickOnPage = (item) => { handleAdditionalFiltration(item);}

  return (
    <div className='pagination'>
      {(pages.length > 1) && 
        <>
          <button 
            className='pagination__button pagination__button-prev'
            disabled={(page === 1)}
            onClick={handleClickPrev}
          >
          Prev
          </button>
          <div className='pagination__pages-wrapper'>
            {pages.map((item) => (
              <div
                className={
                  page === item ? 'pagination__page-item_active' : 'pagination__page-item'
                }
                onClick={() => handleClickOnPage(item)}
                key={item}
              >
              {item}
              </div>
            ))}
          </div>
          <button 
            className='pagination__button pagination__button-next' 
            onClick={handleClickNext}
            disabled={(numberPages === page) || (pages.length === 0)}
          >
          Next
          </button>
        </>
      }
    </div>
  );
}

export default Pagination;