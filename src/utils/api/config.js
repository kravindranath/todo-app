const API_KEY = process.env.API_KEY;
const URL_SUFFIX = "http://localhost:3000";

export const API = {
  showList: `${URL_SUFFIX}/api/showList`,
  getUser: `${URL_SUFFIX}/api/getUser`,
};

const COMMON = {
  API,
};

export default COMMON;
