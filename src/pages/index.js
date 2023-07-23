import axios from "axios";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import ListCards from "src/ui/ListCards";
import COMMON from "src/utils/api/config";
import _get from "lodash/get";

const EMPTY_OBJ = {};
const heading = "To-do list";

function HomePage(_props) {
  const props = _props || EMPTY_OBJ;
  const results = props.list || [];
  const author = _get(props, "user.0.firstname", "");
  const user_id = _get(props, "user.0.user_id", "");

  return (
    <div>
      <Navigation />
      <Layout>
        <ListCards
          title={heading}
          cards={results}
          author={author}
          user_id={user_id}
        />
      </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { query, req, res } = { ...context };
  const view = query.view || "";
  const url_showList = COMMON.API.showList;
  const url_getUser = COMMON.API.getUser;
  const url = COMMON.API.showList;
  let userData = await axios.get(url_getUser).then((response) => response.data);
  let listData = await axios
    .get(url_showList)
    .then((response) => response.data);
  console.log("==>", userData);
  console.log("\n==>", listData);

  return {
    props: { list: listData, user: userData },
  };
}

export default HomePage;
