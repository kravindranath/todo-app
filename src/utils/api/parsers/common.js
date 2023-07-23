import _pick from "lodash/pick";

const getListFields = ["content", "title", "status", "user_id"];
const getUserFields = ["user_id", "username", "firstname", "lastname", "email"];

export function parseShowList(data) {
  const _data = data || [];
  const parsedData = _data.map((item, key) => {
    return _pick(item, getListFields);
  });
  return parsedData;
}

export function parseUserList(data) {
  const _data = data || [];
  const parsedData = _data.map((item, key) => {
    return _pick(item, getUserFields);
  });
  return parsedData;
}
