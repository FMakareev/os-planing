

/**
 * @example
 * GetObjectByKey({
				DocIcon: true,
				PdfIcon: false,
				JpgIcon: false,
			}, {
				DocIcon: DocIcon,
				PdfIcon: PdfIcon,
				JpgIcon: JpgIcon
			})
 * @param {any} dict
 * @param {any} data
 * @desc метод по параметру dict смотрит какой свойство имеет значение true и как только его находит возвращает
 * по ключу из dict значение из data
 * */
export const GetObjectByKey = (dict: any, data: any): any => {
try{
	for (const prop in dict) {
		if (dict[prop]) {
			if (data && data.hasOwnProperty(prop)) {
				return data[prop];
			}
		}
	}
	return null;
} catch(error){
	console.log(error);
	return null;
}
};
