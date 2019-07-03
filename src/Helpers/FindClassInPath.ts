/**
 * @param {array} path - массив объекто дом элементов начиная от того на котором сработало событие и до корня документа
 * @param {string} className - название класса который
 * @desc метод ищет в массиве класс и возвращает его индекс.
 * */
export const FindClassInPath = (path: any[], className: string): number => {
  try {
    console.log(path);
    return path.findIndex(item => {
      console.log(item.className);
      if (item.className) {
        let result: string[] = item.className.match(new RegExp(`((^|\\s)${className}(\\s|$))`, 'g'));
        console.log(result);
        return result.length > 0;
      }
      return false;
    });
  } catch (error) {
    return -1;
  }
};

export default FindClassInPath;
