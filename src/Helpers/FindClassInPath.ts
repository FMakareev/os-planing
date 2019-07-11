/**
 * @param {array} path - массив объекто дом элементов начиная от того на котором сработало событие и до корня документа
 * @param {string} className - название класса который
 * @desc метод ищет в массиве класс и возвращает его индекс.
 * */
export const FindClassInPath = (path: any[], className: string): number => {
  try {
    return path.findIndex(item => {
      if (item.className) {
        let result: string[] = item.className.match(new RegExp(`((^|\\s)${className}(\\s|$))`, 'g'));
        return result ? result.length > 0 : false;
      }
      return false;
    });
  } catch (error) {
    console.error('Error: ', error);
    return -1;
  }
};

export default FindClassInPath;
