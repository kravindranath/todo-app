import axios from "axios";
import COMMON from "src/utils/api/config";
import { parseShowList } from "src/utils/api/parsers/showList";
import conn from "src/utils/db";

const EMPTY_ARR = [];
const ERROR_400 = { message: "Error fetching data", status: 400 };

export default async function showListHandler({ query: { view } }, res, req) {
  console.log("--HIT showList--");

  //connect to the db notes
  try {
    console.log("req nom", req?.body);
    const dbquery =
      'SELECT content, user_id, title, status FROM public."notes"';
    const result = await conn.query(dbquery);
    const parsedResults = parseShowList(result?.rows);
    res.status(200).json(parsedResults);
    return;
  } catch (error) {
    console.log(error);
  }

  res.status(400).json(ERROR_400);
  return;
}
