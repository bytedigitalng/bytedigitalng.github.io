import Layout from "../layout/Layout";

import Testimonials from "../components/Testimonials";
import PageHeader from "../components/PageHeader";

let headerContent = {
  "title" : "What we do",
  "subtitle" : "What we can do for you, your brand, your business",
  "class" : "page-header d-flex align-items-center py-5",
};

let pageTitle = {
  "title" : "Our Services - Byte Digital"
}

const Services = () => (
  <Layout data={pageTitle}>
    <PageHeader data={headerContent} />
    <main>
      <Testimonials />
    </main>
  </Layout>
);

export default Services;
