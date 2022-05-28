const dataSelectListForColumn = {
  nameSelect: 'Выбор колонки',
  listOptions: [
    {
      name: 'Название',
      value: 'name',
      isAvailable: true,
    }, 
    {
      name: 'Количество',
      value: 'number',
      isAvailable: true,
    },
    {
      name: 'Расстояние',
      value: 'distance',
      isAvailable: true,
    }
  ]
};
const dataSelectListForСondition = {
  nameSelect: 'Выбор условия',
  listOptions: [
    {
      name: 'равно',
      value: 0,
      isAvailable: false,
    }, 
    {
      name: 'содержит',
      value: 1,
      isAvailable: true,
    }, 
    {
      name:'больше',
      value: 2,
      isAvailable: false,
    }, 
    {
      name: 'меньше',
      value: 3,
      isAvailable: false,
    }]
};

export {
  dataSelectListForColumn,
  dataSelectListForСondition
}