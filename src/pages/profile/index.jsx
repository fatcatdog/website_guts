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
              {'I currently spend my days programming '}
              <a
                href="https://en.wikipedia.org/wiki/Automated_guided_vehicle"
                target="_blank"
              >
                AGVs
              </a>
              {' in Boston.'}
              <br />
              {'I used to sell stuff for '}
              <a href="https://apttus.com" target="_blank">
                Apttus
              </a>
              {' and before that '}
              <a href="https://zocdoc.com" target="_blank">
                ZocDoc.
              </a>
              <br />
              I like learning about web and mobile technologies.
              <br />
              I hope this website helps me improve my writing.
              <br />
              {'Feel free to drop me a note '}
              <a href="https://twitter.com/jakeduchen" target="_blank">
                @jakeduchen
              </a>
            </p>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">
                  {'things I would build if I was better at time management:'}
                </h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-6 text-center">
                <li>a Google Action for Google's Assistant</li>
                <li>a React Native app that doesn't stink</li>
                <li>an app that uses machine learning</li>
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
          <section className="text-center">
            <p className="lead text-muted">
              {'I built this website with '}
              <a href="https://www.gatsbyjs.org/" target="_blank">
                Gatsby.js
              </a>
              {' and '}
              <a href="https://github.com/jaxx2104" target="_blank">
                {' '}
                jaxx2104
              </a>
              {"'s awesome"}
              <a
                href="https://github.com/jaxx2104/gatsby-starter-bootstrap"
                target="_blank"
              >
                {' '}
                gatsby-starter-bootstrap
              </a>
              {' template.'}
            </p>
          </section>
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
