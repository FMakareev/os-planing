export const ExternalFinalFormSubmit = (formId: string) => () => {
  if(!formId){
    console.error('Error! Argument "formId" is required');
    return null;
  }
  const form = document.getElementById(formId);
  form && form.dispatchEvent(new Event('submit', {cancelable: true}))
};

export default ExternalFinalFormSubmit;