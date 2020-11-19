import Link from "next/link";

const HomePortfolio = () => (
  <section id="next-section" className="portfolio-area section-py">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading mb-70">
            <h2 className="pb-5">Latest Works</h2>
            <p>
              Some of our works and projects for both clients and in house <br className="d-none d-md-block" />
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
                    <h3 className="text-lower">iReg</h3>
                  </a>
                  </Link>
                  <h5>Web Application</h5>
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
                    <h3 className="text-lower">New Clothes</h3>
                  </a>
                  </Link>
                  <h6>Fashion</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-60">
        <Link href="/works">
            <a className="btn btn-default btn-outline-secondary">
                Learn More
            </a>
        </Link>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
