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
                                <a href="index.html"><img src="/assets/img/logo/byte_logo_white_md.svg" alt="Logo"/></a>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-12 col-md-4 sm-mb-30">
                        <div className="footer-widget pr-30">
                            <h5 className="text-white">About us</h5>
                            <p>The point of using Lorem Ipsum is that it has a normal distribution of letters, as opposed to using nt here, conten</p>
                        </div>
                    </div>
            
                    <div className="col-12 col-md-4">
                        <div className="footer-widget  text-white">
                            <h5 className="text-white">Contact us</h5>
                            <p>Phone : <a href="tel:+98 698 5874 5896">+98 698 5874 5896</a></p>
                            <p>Email : <a href="mailto:demo@mail.com">demo@mail.com</a></p>
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
                            <p>&copy; Copyright <span id="currentYear"></span> With love from <a href="https://byte.ng">Byte Digital</a></p>
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