import Layout from "../layout/Layout";
import Notfound from "../components/404.js";

let pageTitle = {
  "title" : "Page Missing - Byte DIgital"
}

const PageNotFound = () => (
  <Layout data={pageTitle}>
    <Notfound />
  </Layout>
);

export default PageNotFound;
