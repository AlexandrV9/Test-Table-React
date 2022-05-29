import Axios from 'axios';

const getFilteredData = async (optionСondition, item, {
  page,
  numElementOnPage,
  optionColumn,
  changeValue,
  setSortedData,
  setNumberPages,
  setPage,
}) => {
  // setIsLoading(true)
  let numPage = item;
  const sendData = {
    column: optionColumn,
    operation: optionСondition,
    value: changeValue
  }
  try {
    const filterDataLength = await Axios.post('http://localhost:3001/api/get/filterDataLength', sendData);
    if(filterDataLength.data.length === 0) {
      setSortedData([]);
      setNumberPages(0);
      // setIsLoading(false);
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
      // setIsLoading(false);
    }
  } catch(error) {
    console.log(error.message);
  }
  
}

export {
  getFilteredData,
}