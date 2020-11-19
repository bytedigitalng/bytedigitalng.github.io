import Link from "next/link";

const PortfolioItem = (props) => (
  <div className="portfolio-item style4">
    {props.data.map((item, index) => (
      <div className={item.classname}>
        <div className="portfolio-thumb w-50">
          <img src={item.image} />
        </div>
        <div className="portfolio-title w-50 bg-light px-50 py-50">
          <Link href={item.href}>
            <a>
              <h3>{item.title}</h3>
            </a>
          </Link>
          <h5>{item.category}</h5>
          <p className="mb-5">{item.description}</p>
          <Link href={item.href}>
            <a>
              <i className="ti-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default PortfolioItem;
