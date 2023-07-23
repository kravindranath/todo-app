import _get from "lodash/get";
import _pick from "lodash/pick";

const fieldsArr = [
  "url",
  "id",
  "published_date",
  "section",
  "subsection",
  "byline",
  "type",
  "title",
  "abstract",
  "media",
];

export function parseShowList(data) {
  const parsedData = data.map((item, key) => {
    return _pick(item, fieldsArr);
  });
  return parsedData;
}
