import axios from "axios";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import ListCards from "src/ui/ListCards";

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
  const section = query.section || "";

  let apiData = {};
  await axios
    .get(`http://localhost:3000/api/show`)
    .then((res) => {
      apiData = res.data;
    })
    .catch((err) => {
      apiData = err;
    });

  return {
    props: { ...apiData, view },
  };
}

export default HomePage;
