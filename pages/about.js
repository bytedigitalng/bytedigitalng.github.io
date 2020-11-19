import Layout from "../layout/Layout";

import PageHeader from "../components/PageHeader";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

let headerContent = {
  title: "Who we are",
  subtitle: "Learn about what motivates us",
  class: "page-header d-flex align-items-center py-5",
};

let pageTitle = {
  "title" : "About Us - Byte DIgital"
}

const About = () => (
  <Layout data={pageTitle}>
    <PageHeader data={headerContent} />
    <main>
      <section className="section-py bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="section-heading mb-70">
                <h2 className="pb-5">About Us</h2>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting,{" "}
                  <br className="d-none d-md-block" /> but also the leap into
                  electronic typesetting,
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src="assets/img/others/about-02.jpg" className="img-fluid" />
            </div>
          </div>

          <div className="row justify-content-center mt-90">
            <div className="col-md-4 mb-50">
              <div className="contact-form">
                <h4 className="mb-30 text-center">Mission</h4>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, but also the leap into electronic
                  typesetting,
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-50">
              <div className="contact-form">
                <h4 className="mb-30 text-center">Vision</h4>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, but also the leap into electronic
                  typesetting,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <CallToAction />
    </main>
  </Layout>
);

export default About;
