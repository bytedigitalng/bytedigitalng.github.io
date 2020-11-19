import PortfolioItem from "./PortfolioItem";

let portfolioContent = [
  {
    image: "assets/img/portfolio/style5/3.jpg",
    title: "We are here",
    category: "website design",
    description: "page-header d-flex align-items-center py-5 bg-img1",
    href: "/portfolio/ireg",
    classname: "single-portfolio d-md-flex align-items-center mb-80",
  },
  {
    image: "assets/img/portfolio/style5/3.jpg",
    title: "We are here",
    category: "website design",
    description: "page-header d-flex align-items-center py-5 bg-img1",
    href: "/portfolio/ireg",
    classname: "single-portfolio d-md-flex align-items-center mb-80 flex-row-reverse",
  },
  {
    image: "assets/img/portfolio/style5/3.jpg",
    title: "We are here",
    category: "website design",
    description: "page-header d-flex align-items-center py-5 bg-img1",
    href: "/portfolio/ireg",
    classname: "single-portfolio d-md-flex align-items-center mb-80",
  },
];

const Portfolio = () => (
  <section id="next-section" className="portfolio-area section-py">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading mb-70">
            <h2 className="pb-5">Latest Works</h2>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution <br className="d-none d-md-block" /> of
              letters, as opposed to using 'Content here, content
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          
            <PortfolioItem data={portfolioContent} />
          
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
