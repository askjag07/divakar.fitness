import * as React from 'react';
import { Link } from 'gatsby';

export default class IndexPage extends React.Component<
  {},
  { activeMenu: boolean }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeMenu: false,
    };
  }
  override render() {
    return (
      <>
        <header>
          <nav
            className="navbar"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item has-text-black is-size-4 mr-6"
                  to="/"
                >
                  <strong>Test App</strong>
                </Link>
                <a
                  role="button"
                  className={`navbar-burger ${
                    this.state.activeMenu ? 'is-active' : ''
                  }`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="mainNavbar"
                  onClick={() =>
                    this.setState({ activeMenu: !this.state.activeMenu })
                  }
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div
                id="mainNavbar"
                className={`navbar-menu ${
                  this.state.activeMenu ? 'is-active' : ''
                }`}
              >
                <div className="navbar-start pl-2">
                  <Link className="navbar-item" to="/hi">
                    Hi
                  </Link>
                  <Link className="navbar-item" to="/there">
                    There
                  </Link>
                  <Link className="navbar-item" to="/beau">
                    Beau
                  </Link>
                  <Link className="navbar-item" to="/tiful">
                    Tiful
                  </Link>
                  <Link className="navbar-item" to="/links">
                    Links
                  </Link>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a className="button is-light">Log in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
          <main className="hero is-large">
            <div className="hero-body">
              <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                  <h1 className="title is-1">The Greatest Website Ever</h1>
                  <button className="button is-large is-primary mr-4 mb-4">
                    Projects
                  </button>
                  <button className="button is-large">Blog</button>
                </div>
                <div className="column is-6"></div>
              </div>
            </div>
          </main>
          <section className="section is-medium has-text-right">
            <h3 className="title">Section 1</h3>
            <h4 className="subtitle">There is so much going on here.</h4>
          </section>
          <section className="section is-medium">
            <h3 className="title">Section 2</h3>
            <h4 className="subtitle">Here too, that's a fact.</h4>
          </section>
          <section className="section is-medium has-text-centered">
            <h3 className="title">Section 3</h3>
            <h4 className="subtitle">That's it for today. Bye!</h4>
          </section>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>© 2021, Virtuoso. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
