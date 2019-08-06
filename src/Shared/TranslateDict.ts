interface IDict {
  'Login or password not found': string;
  'not found': string;
  "GraphQL error: email already exist": string;
  "Internal Server Error": string;
  'Variable "$city" of required type "String!" was not provided.': string;
  'Network error: Response not successful: Received status code 400': string;

  [index: string]: any;
}
// "In field "email": Expected "String!", found null"
// 2: "In field "password": Expected "String!", found null"
// 3: "In field "avatar": Expected "String!", found null"
// 4: "In field "fullName": Expected "String!", found null."
export const TranslateDict: IDict = {
  'Login or password not found': 'Пользователь с заданным логином не найден или пароль не действителен.',
  'not found': 'Совпадений не найдено',
  "GraphQL error: email already exist": 'Электронная почта уже существует',
  "GraphQL error: GraphQL error: email already exist": 'Электронная почта уже существует',
  "Internal Server Error": 'Ошибка сервера',
  'Variable "$city" of required type "String!" was not provided.': '"Приемная" обязательна для заполнения',
  'Network error: Response not successful: Received status code 400': 'Ошибка сервера',
  'In field "email": Expected "String!", found null': 'Email обязателен для заполнения',
  'In field "password": Expected "String!", found null': 'Пароль обязателен для заполнения',
  'In field "avatar": Expected "String!", found null': 'Аватар обязателен для заполнения',
  'In field "fullName": Expected "String!", found null': 'ФИО обязателено для заполнения',
  "GraphQL error: 'NoneType' object has no attribute 'is_broken'": 'Проблемы с почтовым сервером',
};


export const GetMessageByTranslateKey = (key: string) => {
  try {
    // eslint-disable-next-line no-mixed-operators
    return TranslateDict && TranslateDict[key] || 'Произошла ошибка во время выполнения запроса';
  } catch (e) {
    return 'Произошла ошибка во время выполнения запроса';
  }
};

export default TranslateDict;