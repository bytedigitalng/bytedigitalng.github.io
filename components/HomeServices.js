const HomeServices = () => (
    <section className="service-area">
        <div className="container">
            <div className="row text-center mt-minus justify-content-center">
                <div className="col-12 col-md-6 col-lg-3 sm-mb-30 md-mb-40">
                    <div className="single-service style1 bg-white">
                        <i className="ti-html5 text-blue"></i> <i className="ti-wordpress text-blue"></i>
                        <h4 className="text-blue text-capitalize">Website</h4>
                        <p>Responsive HTML/CSS and wordpress website for your brand and business.</p>
                    </div>
                </div>
 
                <div className="col-12 col-md-6 col-lg-3 sm-mb-30 md-mb-40">
                    <div className="single-service style1 bg-white">
                        <i className="ti-package text-blue"></i>
                        <h4 className="text-blue text-capitalize">Web Applications</h4>
                        <p>Web apps and tools development for efficiency of business processes.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 sm-mb-30">
                    <div className="single-service style1 bg-white">
                        <i className="ti-android text-blue"></i> <i className="ti-apple text-blue"></i>
                        <h4 className="text-blue text-capitalize">Mobile Apps</h4>
                        <p>Andriod and IOS app development for your business process and tools.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HomeServices;