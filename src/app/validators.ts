const titleRegex = /^.{1,50}$/;
const bodyRegex = /^.{1,250}$/;

export const validateForm = (title: string, body: string) => {
  const isTitleValid = titleRegex.test(title);
  const isBodyValid = bodyRegex.test(body);

  if (!isTitleValid) {
    alert("El título debe tener entre 1 y 50 caracteres.");
  }
  if (!isBodyValid) {
    alert("El cuerpo debe tener entre 1 y 250 caracteres.");
  }

  return isTitleValid && isBodyValid;
};
