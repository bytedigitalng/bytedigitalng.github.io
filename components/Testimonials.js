const Testimonials = () => (
  <section className="section-py bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading">
            <h2 className="pb-5">Testimonial</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <div className="slider">
            <input
              type="radio"
              name="slider"
              title="slide1"
              defaultChecked
              className="slider__nav"
            />
            <input
              type="radio"
              name="slider"
              title="slide2"
              className="slider__nav"
            />
            <div className="slider__inner">
              <div className="slider__contents">
                <i className="slider__image fa fa-codepen"></i>
                <div className="row">
                  <div className="col-12 col-sm-6 sm-mb-30">
                    <div className="card border-0 review-card style1 position-relative">
                      <div className="card-body px-50 py-50">
                        <p className="card-text mb-20">
                          The point of using Lorem Ipsum is thamore-or-less
                          normal distribution of letters, as opposed to ntent
                          here, content use to color.
                        </p>
                        <div className="media">
                          <h5 className="mb-0">Rakib mia</h5>
                          <h6 className="mb-0 ml-10 align-self-center">
                            / Developer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="card border-0 review-card style1 position-relative">
                      <div className="card-body px-50 py-50">
                        <p className="card-text mb-20">
                          The point of using Lorem Ipsum is thamore-or-less
                          normal distribution of letters, as opposed to ntent
                          here, content use to color.
                        </p>
                        <div className="media">
                          <h5 className="mb-0">Rakib mia</h5>
                          <h6 className="mb-0 ml-10 align-self-center">
                            / Developer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider__contents">
                <i className="slider__image fa fa-newspaper-o"></i>
                <div className="row">
                  <div className="col-12 col-sm-6 sm-mb-30">
                    <div className="card border-0 review-card style1 position-relative">
                      <div className="card-body px-50 py-50">
                        <p className="card-text mb-20">
                          The point of using Lorem Ipsum is thamore-or-less
                          normal distribution of letters, as opposed to ntent
                          here, content use to color.
                        </p>
                        <div className="media">
                          <h5 className="mb-0">Rakib mia</h5>
                          <h6 className="mb-0 ml-10 align-self-center">
                            / Developer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="card border-0 review-card style1 position-relative">
                      <div className="card-body px-50 py-50">
                        <p className="card-text mb-20">
                          The point of using Lorem Ipsum is thamore-or-less
                          normal distribution of letters, as opposed to ntent
                          here, content use to color.
                        </p>
                        <div className="media">
                          <h5 className="mb-0">Rakib mia</h5>
                          <h6 className="mb-0 ml-10 align-self-center">
                            / Developer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .slider {
        min-height: 400px;
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .slider__nav {
        width: 12px;
        height: 12px;
        margin: 2rem 12px;
        border-radius: 50%;
        z-index: 10;
        outline: 6px solid #ccc;
        outline-offset: -6px;
        box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .slider__nav:checked {
        -webkit-animation: check 0.4s linear forwards;
        animation: check 0.4s linear forwards;
      }
      .slider__nav:checked:nth-of-type(1) ~ .slider__inner {
        left: 0%;
      }
      .slider__nav:checked:nth-of-type(2) ~ .slider__inner {
        left: -100%;
      }

      .slider__inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 100%;
        -webkit-transition: left 0.4s;
        transition: left 0.4s;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
      }
      .slider__contents {
        height: 100%;
        padding: 2rem;
        text-align: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-flex-flow: column nowrap;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .slider__image {
        font-size: 2.7rem;
        color: #2196f3;
      }
      .slider__caption {
        font-weight: 500;
        margin: 2rem 0 1rem;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
      }
      .slider__txt {
        color: #999;
        margin-bottom: 3rem;
        max-width: 300px;
      }

      @-webkit-keyframes check {
        50% {
          outline-color: #333;
          box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
        }
        100% {
          outline-color: #333;
          box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
        }
      }

      @keyframes check {
        50% {
          outline-color: #333;
          box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
        }
        100% {
          outline-color: #333;
          box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
        }
      }
    `}</style>
  </section>
);

export default Testimonials;
