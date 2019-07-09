/**
 * @param {any} queryString - поисковая строка, после деструктуризации
 * @param {any} targetQS
 * @desc метод для переключения между number и letter в поисковой строке.
 * */
export const changeQueryString = (queryString: any, targetQS: any) => {
  let newSearchString = {};

  for (let key in queryString) {
    if (key === 'searchPhrase') {
      newSearchString = {searchPhrase: queryString[key]};
    }
  }

  return {...newSearchString, ...targetQS}
};
