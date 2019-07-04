interface IDict {
  'Login or password not found': string;
  'not found': string;
  "GraphQL error: email already exist": string;
  "Internal Server Error": string;
  'Variable "$city" of required type "String!" was not provided.': string;
  'Network error: Response not successful: Received status code 400': string;

  [index: string]: any;
}

export const TranslateDict: IDict = {
  'Login or password not found': 'Пользователь с заданным логином или паролем не найден',
  'not found': 'Совпадений не найдено',
  "GraphQL error: email already exist": 'электронная почта уже существует',
  "Internal Server Error": 'Ошибка сервера',
  'Variable "$city" of required type "String!" was not provided.': '"Приемная" обязательна для заполнения',
  'Network error: Response not successful: Received status code 400': 'Ошибка сервера',
};


export const GetMessageByTranslateKey = (key: string) => {
  try {
    return TranslateDict && TranslateDict[key] || key;
  } catch (e) {
    return key
  }
}

export default TranslateDict;