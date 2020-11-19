import Layout from "../layout/Layout";
import PageHeader from "../components/PageHeader";
import SocialLinks from "../components/SocialLinks";

let headerContent = {
  title: "We are here",
  subtitle: "This is the subTitile of the header",
  class: "page-header d-flex align-items-center py-5",
};

let pageTitle = {
  "title" : "Contact Us - Byte DIgital"
}

const Contact = () => (
  <Layout data={pageTitle}>
    <PageHeader data={headerContent} />
    <main>
      <section className="section-py bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="section-heading mb-70">
                <h2 className="pb-5">feel free to drop us a line</h2>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting,{" "}
                  <br className="d-none d-md-block" /> but also the leap into
                  electronic typesetting,
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="mb-30">information</h4>
                  <p>
                    <a href="tel:+98857478547589">
                      +98 857 478 547 589  <i className="ti-mobile"></i> 
                    </a>
                  </p>

                  <p>
                    <a href="mailto:hello@byte.ng">
                      hello@byte.ng  <i className="ti-email"></i> 
                    </a>
                  </p>

                  <p className="mb-15">
                    <SocialLinks />
                  </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="contact-info text-center mb-50"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="contact-form">
                <h4 className="mb-30 text-center">information</h4>
                <form id="contactForm" action="php/form.php" method="post">
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-30">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12 col-sm-6 mb-30">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control mb-30"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <button
                    id="contactSubmit"
                    className="btn btn-default btn-outline-dark"
                    type="submit"
                    data-complete-text="Well Done!"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Contact;
