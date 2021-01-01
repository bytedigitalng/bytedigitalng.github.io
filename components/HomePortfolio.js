import Link from "next/link";

const HomePortfolio = () => (
  <section id="next-section" className="portfolio-area section-py">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading mb-70">
            <h2 className="pb-5">Latest Works</h2>
            <p>
              Some of our works, projects and partnerships <br className="d-none d-md-block" />
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="fitRows-grid" className="portfolio-item style1">
            <div className="grid-item m-4">
              <div className="single-portfolio position-relative text-center">
                <img src="assets\img\portfolio\style1\2.jpg" alt="Thumbnail" />
                <div className="portfolio-title bg-white d-flex flex-column justify-content-center">
                  <Link href="portfolio\details">
                  <a>
                    <h3 className="text-lower">ireg.com.ng</h3>
                  </a>
                  </Link>
                  <h6>Web Application</h6>
                  <h6 className="text-lowercase font-weight-light">business registration & legal service</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="fitRows-grid" className="portfolio-item style1">
            <div className="grid-item m-4">
              <div className="single-portfolio position-relative text-center">
                <img src="assets\img\portfolio\style1\2.jpg" alt="Thumbnail" />
                <div className="portfolio-title bg-white d-flex flex-column justify-content-center">
                  <Link  href="portfolio\details">
                  <a>
                    <h3 className="text-lower">jaymasedge.com</h3>
                  </a>
                  </Link>
                  <h6>Web Application</h6>
                  <h6 className="text-lowercase font-weight-light">Brand and merchandise online ordering service</h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-60">
        <Link href="/works">
            <a className="btn btn-default btn-outline-secondary">
                See more of our works
            </a>
        </Link>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
