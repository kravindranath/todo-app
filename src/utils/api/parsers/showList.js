import _get from "lodash/get";
import _pick from "lodash/pick";

const fieldsArr = ["content", "status", "user_id"];

export function parseShowList(data) {
  const _data = data || [];
  const parsedData = _data.map((item, key) => {
    return _pick(item, fieldsArr);
  });
  return parsedData;
}
