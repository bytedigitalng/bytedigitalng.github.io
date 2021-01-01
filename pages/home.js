import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomePortfolio from "../components/HomePortfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

let pageTitle = {
  "title" : "Byte Digital - Digital Creative Services"
}

const Home = () => (
  <Layout data={pageTitle}>
    <Hero />
    <main>
      <HomeServices />
      <HomePortfolio />
      <Testimonials />
      <CallToAction />
    </main>
  </Layout>
);

export default Home;
