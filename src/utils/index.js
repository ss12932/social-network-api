const { format } = require('date-fns');

const formatDate = (date) => format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss");

const validateEmail = (email) => {
  const regexStr = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  return regexStr.test(email);
};

module.exports = { validateEmail, formatDate };
