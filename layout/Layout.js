import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.data.title}</title>
      <link rel="icon" href="assets/img/favicon.png" sizes="64x64" ></link>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
