import axios from "axios";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import ListCards from "src/ui/ListCards";
import COMMON from "src/utils/api/config";

const EMPTY_OBJ = {};
const heading = "To-do list";

function HomePage(_props) {
  const props = _props || EMPTY_OBJ;
  const results = props.data || [];

  return (
    <div>
      <Navigation />
      <Layout>
        <ListCards title={heading} cards={results} />
      </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { query, req, res } = { ...context };
  const view = query.view || "";
  const url = COMMON.API.showList.default;
  let apiData = await axios.get(url).then((response) => response.data);
  console.log("==>", apiData);

  return {
    props: { data: apiData },
  };
}

export default HomePage;
