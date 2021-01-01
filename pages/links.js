import Head from "next/head";
import Link from "next/link";
import Footer from "../layout/Footer";

const Links = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta content="" name="descriptison" />
      <meta content="" name="keywords" />
      <title>Byte Digital - Links</title>
      <link rel="icon" href="assets/img/favicon.png" sizes="64x64" />
    </Head>

    <main>
      <section className="section-py bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="text-center">
                <Link href="/">
                  <a>
                    <img src="/assets/img/logo/byte_logo.svg" alt="Logo" />
                  </a>
                </Link>
              </p>
              <p className="text-center"></p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Links;
