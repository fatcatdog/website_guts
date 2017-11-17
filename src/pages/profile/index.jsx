import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/propic.jpg'}
              alt="jakeduchen"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>@jakeduchen</h1>
            <p className="lead text-muted">
              I currently spend my days working with{' '}
              <a
                href="https://en.wikipedia.org/wiki/Automated_guided_vehicle"
                target="_blank"
              >
                AGVs
              </a>.
              <br />
              In my free time I like learning about web and mobile technologies.
              <br />
              If you have any feedback on my writing, projects, or just want to
              say hi, feel free to drop me a note.
            </p>
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/jakeduchen"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @jakeduchen
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">
                  A few technologies I'm familiar with
                </h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Ruby"
                >
                  <i
                    className="devicon-ruby-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="repos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Social</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  <a href="https://github.com/fatcatdog">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jake-duchen-05080753/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/jakeduchen">Twitter</a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={pathPrefix + '/img/work3.png'}
                  className="img-rounded img-responsive"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
