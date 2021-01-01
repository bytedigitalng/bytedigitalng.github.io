import Link from "next/link";

const Header = () => (
  <header id="active-sticky" className="position-fixed bg-white w-100">
    <div className="container-fluid px-180">
      <div className="navbar navbar-light px-0">
      <Link href="/">
        <a className="navbar-brand">
          <img src="/assets/img/logo/byte_logo.svg" alt="Logo" />
        </a>
      </Link>
        <span
          className="menu-toggler d-md-none"
          data-toggle="collapse"
          data-target="#accordianMenu"
        >
          <i className="ti-menu"></i>
        </span>
        <nav
          id="accordianMenu"
          className="primary-menu horizontal my-auto ml-auto collapse d-md-block"
        >
          <ul className="topNav">
            <li>
              <Link href="/about">
                <a> About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/offers">
                <a className="text-success">
                  <i className="ti-gift"></i> Offers
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
