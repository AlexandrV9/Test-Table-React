const dataSelectListForColumn = {
  nameSelect: 'Выбор колонки',
  listOptions: [
    {
      name: 'Название',
      isAvailable: true,
    }, 
    {
      name: 'Количество',
      isAvailable: true,
    },
    {
      name: 'Расстояние',
      isAvailable: true,
    }
  ]
};
const dataSelectListForСondition = {
  nameSelect: 'Выбор условия',
  listOptions: [
    {
      name: 'равно',
      isAvailable: false,
    }, 
    {
      name: 'содержит',
      isAvailable: true,
    }, 
    {
      name:'больше',
      isAvailable: false,
    }, 
    {
      name: 'меньше',
      isAvailable: false,
    }]
};

export {
  dataSelectListForColumn,
  dataSelectListForСondition
}