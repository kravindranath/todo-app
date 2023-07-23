import { parseUserList } from "src/utils/api/parsers/common";
import conn from "src/utils/db";

const ERROR_400 = { message: "Error fetching data", status: 400 };

export default async function getUserHandler(
  { query: { username } },
  res,
  req
) {
  //connect to the db notes
  try {
    console.log("req nom", req?.body);
    const dbquery =
      'SELECT user_id, firstname, lastname, username, email FROM public."user" WHERE username=($1)';
    const values = ["kr001"];
    const result = await conn.query(dbquery, values);
    const parsedResults = parseUserList(result?.rows);
    res.status(200).json(parsedResults);
    return;
  } catch (error) {
    console.log(error);
  }

  res.status(400).json(ERROR_400);
  return;
}
