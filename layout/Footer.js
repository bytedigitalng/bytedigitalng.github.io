import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const Footer = () => (
  <footer className="footer-two">
    <div className="widget-area py-110 bg-blue">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 sm-mb-30">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link href="/">
                  <a>
                    <img
                      src="/assets/img/logo/byte_logo_white_md.svg"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 sm-mb-30">
            <div className="footer-widget pr-30">
              <h5 className="text-white">About us</h5>
              <p>
                The point of using Lorem Ipsum is that it has a normal
                distribution of letters, as opposed to using nt here, conten
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="footer-widget  text-white">
              <h5 className="text-white">Contact us</h5>
              <p>
                Phone : <a href="tel:+234 ">+234 </a>
              </p>
              <p>
                Email : <a href="mailto:hello@byte.ng">hello@byte.ng</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area py-15 bg-darkblue">
      <div className="container">
        <div className="row">
          <div className="col-12 d-md-flex text-center">
            <div className="copyright-text">
              <p>
                &copy; Copyright <span id="currentYear">2020</span>
                &nbsp;-&nbsp; 
                <Link href="https://byte.ng">
                  <a>Byte Digital</a>
                </Link>
              </p>
            </div>
            <div className="ml-auto">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
