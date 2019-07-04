import {GetMessageByTranslateKey} from "../Shared/TranslateDict";

/**
 * @param {object} error
 * @param {object} error.errors
 * @param {array} error.message
 * */
export const normalizeSubmissionError = (error: any) => {
  const data: any = {
    _error: error.message,
  };
  for (let prop in error.errors) {
    if (Array.isArray(error.errors[prop])) {
      data[prop] = GetMessageByTranslateKey(error.errors[prop][0]);
    }
  }
  return data;
}
