/**
 * My Elements Helper
 */

const Elements = {
  createHeader({
    size = 1, textContent = '',
  }) {
    const header = document.createElement(`h${(size < 1 || size > 6) ? 1 : size}`);
    header.textContent = textContent;
    return header;
  },
  createLoginForm({
    size = 1, textContent = '',
  }) {
    const loginForm = document.createElement(`h${(size < 1 || size > 6) ? 1 : size}`);
    loginForm.textContent = textContent;
    return loginForm;
  },
};

export default Elements;
