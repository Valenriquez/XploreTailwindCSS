// cookies.js

import Cookies from 'js-cookie';

// Function to get a cookie value by name
export const getCookie = (name) => {
  return Cookies.get(name);
};

// Function to set a cookie value
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, options);
};

// Function to remove a cookie by name
export const removeCookie = (name) => {
  Cookies.remove(name);
};
