import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
