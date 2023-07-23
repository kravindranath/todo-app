import axios from "axios";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import ListCards from "src/ui/ListCards";
import COMMON from "src/utils/api/config";

const EMPTY_OBJ = {};

function HomePage(_props) {
  const props = _props || EMPTY_OBJ;
  const view = props.view || "";
  const results = props.results || [];
  const heading = view === "all" ? "Show all" : "";
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
  console.log("==>", url);
  let apiData = {};
  await axios
    .get(url)
    .then((res) => {
      console.log("==>", JSON.parse(res));
      apiData = res.json();
    })
    .catch((err) => {
      apiData = err;
    });

  return {
    props: { ...apiData, view },
  };
}

export default HomePage;
