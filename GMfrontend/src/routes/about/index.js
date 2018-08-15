import React, { Component } from "react";
import Layout from "../../components/Layout";
const AboutContent = props => {
  return (
    <div>
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage:
            "url('https://unearthed.greenpeace.org/wp-content/uploads/2018/05/GettyImages-625668026.jpg')"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">
                Reduce Your Carbon Footprint Today For A Better Future.
              </h1>
              <h4>
                Global energy-related carbon dioxide emissions has increased by
                1.4 percent in 2017 to 32.5 gigatons. Carbon dioxide emissions
                are the primary cause of global average temperature rise. Reduce
                your footprint to leave a better world for your children
              </h4>
              <br />
              <a
                href="https://www.youtube.com/watch?v=8q7_aV8eLUE"
                target="_blank"
                className="btn btn-danger btn-raised btn-lg"
              >
                <i className="fa fa-play" /> Watch video
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="title">What&apos;s happening?</h2>
                <h5
                  className="description"
                  style={{ textAlign: "justify", color: "656565" }}
                >
                  Due to human activities, the atmospheric concentration of
                  carbon dioxide has been rising extensively since the
                  Industrial Revolution and has now reached dangerous levels not
                  seen in the last 3 million years. Human sources of carbon
                  dioxide emissions are much smaller than natural emissions but
                  they have upset the natural balance that existed for many
                  thousands of years before the influence of humans. The
                  disposal and treatment of waste can produce emissions of
                  several greenhouse gases (GHGs), which contribute to global
                  climate change. The most signifi cant GHG gas produced from
                  waste is methane. It is released during the breakdown of
                  organic matter in landfills. Other forms of waste disposal
                  also produce GHGs but these are mainly in the form of carbon
                  dioxide (a less powerful GHG). Even the recycling of waste
                  produces some emissions (although these are offset by the
                  reduction in fossil fuels that would be required to obtain new
                  raw materials). Waste prevention and recycling help address
                  global climate change by decreasing the amount of greenhouse
                  gas emissions and saving energy (Environmental Protection
                  Agency).
                </h5>
              </div>
            </div>
            <div className="features">
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">public</i>
                    </div>
                    <h4 className="info-title">Sustainability</h4>
                    <p>
                      Sustainable resources can help lighten your ecological
                      footprint, even more so when combined with reducing
                      overall energy usage when possible.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="material-icons">poll</i>
                    </div>
                    <h4 className="info-title">Stats</h4>
                    <p>
                      After three years of flat lining, carbon dioxide levels
                      around the world increased in 2017 by 1.4 per cent to 32.5
                      gigatonnes.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="material-icons">airport_shuttle</i>
                    </div>
                    <h4 className="info-title">Footprint</h4>
                    <p>
                      The amount of carbon dioxide released into the atmosphere
                      as a result of the activities of a particular individual,
                      organization, or community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section text-center">
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-player">
                    <div className="card card-plain">
                      <div className="col-md-6 ml-auto mr-auto">
                        <img
                          src=""
                          alt="Thumbnail Image"
                          className="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <h4 className="card-title">
                        Abeer Fatima
                        <br />
                        <small className="card-description text-muted">
                          Web Developer
                        </small>
                      </h4>
                      <div className="card-body">
                        <p className="card-description" />
                      </div>
                      <div className="card-footer justify-content-center">
                        <a href="#pablo" className="btn btn-link btn-just-icon">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-player">
                    <div className="card card-plain">
                      <div className="col-md-6 ml-auto mr-auto">
                        <img
                          src=""
                          alt="Thumbnail Image"
                          className="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <h4 className="card-title">
                        Lamia Hafez
                        <br />
                        <small className="card-description text-muted">
                          Student
                        </small>
                      </h4>
                      <div className="card-body">
                        <p className="card-description" />
                      </div>
                      <div className="card-footer justify-content-center">
                        <a href="#pablo" className="btn btn-link btn-just-icon">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-player">
                    <div className="card card-plain">
                      <div className="col-md-6 ml-auto mr-auto">
                        <img
                          src=""
                          alt="Thumbnail Image"
                          className="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <h4 className="card-title">
                        Ola Doudin
                        <br />
                        <small className="card-description text-muted">
                          CEO BitOasis
                        </small>
                      </h4>
                      <div className="card-body">
                        <p className="card-description" />
                      </div>
                      <div className="card-footer justify-content-center">
                        <a href="#pablo" className="btn btn-link btn-just-icon">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-contacts">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="text-center title">Enter your details</h2>
                <h4 className="text-center description">
                  To find out ways you can help and reduce your carbon footprint
                </h4>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Your Name</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Your Email</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  {/* <!--<div className="form-group">
                        <label for="exampleMessage" className="bmd-label-floating">Your Message</label>
                        <textarea type="email" className="form-control" rows="4" id="exampleMessage"></textarea>
                      </div>--> */}
                  <div className="row">
                    <div className="col-md-4 ml-auto mr-auto text-center">
                      <button className="btn btn-primary btn-raised">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class About extends Component {
  render() {
    return (
      <Layout>
        <AboutContent />
      </Layout>
    );
  }
}
export default About;
