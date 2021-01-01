import Head from "next/head";

const Splash = (props) => (
  <div>
    <Head>
      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

      <meta content="" name="descriptison"/>
      <meta content="" name="keywords"/>
      <title>{props.data.title}</title>
      <link rel="icon" href="assets/img/favicon.png" sizes="64x64" />
    </Head>
    
    {props.children}
    
  </div>
);

export default Splash;
