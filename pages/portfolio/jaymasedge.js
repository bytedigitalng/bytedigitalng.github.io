import Layout from "../../layout/Layout";
import PortfolioDetails from "../../components/PortfolioDetails";
import Testimonials from "../../components/Testimonials";
import CallToAction from "../../components/CallToAction";

let headerContent = {
  title: "We are here",
  subtitle: "This is the subTitile of the header",
  class: "page-header d-flex align-items-center py-5 bg-img1",
};

let pageTitle = {
    "title" : "About Us - Byte DIgital"
  }

const jaymasedge = () => (
  <Layout data={pageTitle}>
    <main>
      <PortfolioDetails data={headerContent} />
      <Testimonials />
      <CallToAction />
    </main>
  </Layout>
);

export default jaymasedge;