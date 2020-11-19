import Layout from "../layout/Layout";

import Testimonials from "../components/Testimonials";
import PageHeader from "../components/PageHeader";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";

let headerContent = {
  "title" : "Works we did",
  "subtitle" : "What we have worked on for ourself or clients",
  "class" : "page-header d-flex align-items-center py-5",
};

let pageTitle = {
  "title" : "Portfolio - Byte DIgital"
}

const Works = () => (
  <Layout data={pageTitle}>
    <PageHeader data={headerContent} />
    <main>
      <Portfolio />
      <Testimonials />
      <CallToAction />
    </main>
  </Layout>
);

export default Works;
