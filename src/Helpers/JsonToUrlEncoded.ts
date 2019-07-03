export const JsonToUrlEncoded = (element: any, list: any[] = [], key?: string) => {
  if (typeof element === 'object') {
    for (const idx in element) {
      JsonToUrlEncoded(element[idx], list, key ? `${key}[${idx}]` : idx);
    }
  } else {
    list.push(`${key}=${window.encodeURIComponent(element)}`);
  }
  return list.join('&');
};

export default JsonToUrlEncoded;
