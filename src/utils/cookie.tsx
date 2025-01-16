/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * The setCookie function in TypeScript React is used to set a cookie with a specified name, value, and
 * optional expiration period in days.
 * @param {string} name - The `name` parameter is a string that represents the name of the cookie you
 * want to set.
 * @param {any} value - The `value` parameter in the `setCookie` function is the data that you want to
 * store in the cookie. It can be of any type, as it is passed as the second argument when calling the
 * `setCookie` function.
 * @param {number} [days] - The `days` parameter in the `setCookie` function is an optional parameter
 * that specifies the number of days until the cookie expires. If this parameter is provided, the
 * cookie will be set with an expiration date based on the current date plus the number of days
 * specified. If the `days` parameter
 */
export const setCookie = (name: string, value: any, days?: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${encodeURIComponent(
    JSON.stringify(value)
  )}${expires}; path=/`;
};

/**
 * The function `getCookie` retrieves a cookie value by name from the document's cookies using
 * TypeScript in a React application.
 * @param {string} name - The `name` parameter in the `getCookie` function is a string that represents
 * the name of the cookie you want to retrieve from the document's cookies.
 * @returns The `getCookie` function returns the value of the cookie with the specified name after
 * decoding and parsing it as JSON. If a cookie with the specified name is not found, it returns
 * `null`.
 */
export const getCookie = (name: string): any | null => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    if (cookie.startsWith(nameEQ)) {
      return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
    }
  }
  return null;
};

/**
 * The function `deleteCookie` deletes a cookie by setting its Max-Age to a negative value.
 * @param {string} name - The `name` parameter in the `deleteCookie` function represents the name of
 * the cookie that you want to delete from the browser.
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};

/* The `export const cookieUtils` statement is creating an object named `cookieUtils` that contains
references to the `setCookie`, `getCookie`, and `deleteCookie` functions. By exporting this object,
these functions can be accessed and used outside of the module where they are defined. This allows
other parts of the codebase to easily interact with the cookie-related functions by importing
`cookieUtils` and using its properties (`set`, `get`, `delete`) to call the respective functions. */
export const cookieUtils = {
  set: setCookie,
  get: getCookie,
  delete: deleteCookie,
};
