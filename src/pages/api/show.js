import axios from "axios";
import COMMON from "src/utils/api/config";
import { parseShowList } from "src/utils/api/parsers/showList";

const EMPTY_OBJ = {};

export default async function showListHandler({ query: { view } }, res) {
  let apiData = {};
  const url = COMMON.API.showList[view];

  await axios
    .get(url)
    .then((res) => {
      apiData = res.data;
    })
    .catch((err) => {
      apiData = err;
    });

  let filteredApiData = {
    size: apiData.num_results || 0,
    results: parseShowList(apiData.results || []),
  };

  res.status(200).json(filteredApiData || EMPTY_OBJ);
}
