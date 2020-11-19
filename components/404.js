import Link from "next/link";

const Notfound = () => (
  <main>
    <section className="error-area section-py">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto mb-60">
            <div className="row align-items-center">
              <div className="col error-content sm-mb-30">
                <h1 className="text-blue mb-5">404</h1>
                <p className="mb-1">Are you looking for something?</p>
                <ul className="list-unstyled">
                  <li>
                    <Link href="">
                      <a className="">
                        <i className="ti-arrow-circle-right"></i> Check out our
                        offer of the month
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a className="">
                        <i className="ti-arrow-circle-right"></i> Learn about
                        our services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a className="">
                        <i className="ti-arrow-circle-right"></i> See our works
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a className="">
                        <i className="ti-arrow-circle-right"></i> Lets work
                        together
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col error-thumb text-sm-right  basis-auto">
                <img src="assets\img\others\lost.jpg" alt="Thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
            <Link href="/">
              <a className="btn btn-default btn-outline-secondary">
                <i className="ti-angle-left"></i> Back to home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Notfound;
