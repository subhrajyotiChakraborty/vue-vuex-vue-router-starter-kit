/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos"
});
