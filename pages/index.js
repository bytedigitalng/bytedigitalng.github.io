import Splash from "../layout/Splash";
import SocialLinks from "../components/SocialLinks";

let pageTitle = {
  title: "Byte Digital - Digital Creative Services",
};

const Home = () => (
  <Splash data={pageTitle}>
    <main className="my-5 py-5">
      <div className="container my-5 py-5">
        <div className="row text-center">
          <div className="col-12">
            <h1><img src="assets/img/logo/byte_logo_md.svg"/></h1>
            <h2 className=" text-blue">
              We are a digital creative agency
            </h2>
            <h4 className="text-lowercase text-blue font-weight-normal">
              creating web and mobile services/solutions for businesses and
              brands.
            </h4>
            <div className="text-center pt-4 mt-4">
              <SocialLinks/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <div className="border-top my-5"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <h4 className="text-center font-weight-normal">Officially opening for business</h4>
            <h4 className="text-center font-weight-light">Monday 18th January 2021</h4>
          </div>

        </div>
      </div>
    </main>
  </Splash>
);

export default Home;
