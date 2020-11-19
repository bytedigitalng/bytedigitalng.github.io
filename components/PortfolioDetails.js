const PortfolioDetails = () => (
  <section className="portfolio-details section-py">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 class="my-auto py-50 text-center">Blog One</h1>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="thumb">
            <img src="..\assets\img\portfolio\details\1.jpg" alt="Thumbnail" />
          </div>
        </div>
      </div>
      <div className="row align-items-center pt-100">
        <div className="col-12 col-md-8 col-lg-6 sm-mb-30">
          <div className="section-heading">
            <h2 className="pb-5">Latest Works</h2>
            <p className="mb-25">
              Remember that you’re writing this for humans, not for search
              particular. Or at least that’s what you should be doing. So it
              helps friendly, confident and clear, showcasing all the
              communication.
            </p>
            <p>
              Inside the text, it’s usually a good idea to also include some
              humor, to show your personality in some way: you don’t..
            </p>
          </div>
          <nav className="pagination-btn mt-50">
            <ul className="pagination">
              <li className="page-item mr-30">
                <a href="#" className="btn btn-default btn-outline-dark">
                  <i className="ti-arrow-left"></i> prev post
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="btn btn-default btn-outline-dark">
                  next post <i className="ti-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-4 offset-lg-1 col-lg-5">
          <ul className="list-unstyled project-info">
            <li className="pb-10">
              <h5>CATEGORY: Design. development</h5>
            </li>
            <li className="pb-10">
              <h5>CLIENT: Raza sikdat</h5>
            </li>
            <li>
              <h5>DATE: 10/02/2018</h5>
            </li>
            <li className="media">
              <h5 className="align-self-center mb-0">Share:</h5>
              <div className="media-body social-icons social-dark pl-20">
                <a href="#">
                  <i className="ti-facebook"></i>
                </a>
                <a href="#">
                  <i className="ti-twitter"></i>
                </a>
                <a href="#">
                  <i className="ti-instagram"></i>
                </a>
                <a href="#">
                  <i className="ti-linkedin"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioDetails;
