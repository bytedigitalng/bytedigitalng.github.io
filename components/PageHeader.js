const PageHeader = (props) => (
    
  <section className={props.data.class}>
    <div className="container">
      <div className="hero-content style1">
        <h1 className="">{props.data.title}</h1>
        <h4 className="text-lowercase">
            {props.data.subtitle}
        </h4>
      </div>
    </div>
  </section>
);

export default PageHeader;
