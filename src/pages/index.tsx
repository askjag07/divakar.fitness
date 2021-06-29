import * as React from 'react';
<<<<<<< HEAD

import Layout from '../components/layout';

export default class IndexPage extends React.Component<{}, {}> {
  private scrollRef: React.RefObject<HTMLButtonElement> =
    React.createRef<HTMLButtonElement>();

  override render() {
    return (
      <Layout>
        <main className="hero is-fullheight-with-navbar has-text-centered">
          <div className="hero-body">
            <div className="column">
              <h1 className="title is-1">Hard Work Pays Off</h1>
              <span className="subtitle">
                <button className="button is-large is-primary mr-4 mb-4">
                  Let's Talk!
                </button>
              </span>
            </div>
          </div>
          <div className="hero-foot mb-4">
            <button
              className="button is-black is-inverted is-bouncing"
              onClick={() => this.scrollRef.current?.scrollIntoView()}
              ref={this.scrollRef}
            >
              <span className="icon">
=======
import { Link, PageProps } from 'gatsby';

export default class IndexPage extends React.Component<
  {},
  { activeMenu: boolean }
> {
  constructor(props: PageProps) {
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
            className="navbar is-fixed-top is-spaced has-shadow"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item has-text-black is-size-3 mr-6"
                  to="/"
                >
                  <strong>Divakar</strong>
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
                  <a className="navbar-item" to="/">
                    Testimonials
                  </a>
                  <a className="navbar-item" to="/">
                    Facebook
                  </a>
                  <a className="navbar-item" to="/">
                    Instagram
                  </a>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons has-addons">
                      <a
                        className="button is-inverted is-black"
                        href="tel:+918074623617"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                          >
                            <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 018.707-17.16l69.998-29.999a15 15 0 0117.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 01-4.289-17.518l30-69.998a15 15 0 0117.16-8.707l65 14.998A14.997 14.997 0 01384 126c0 160.292-129.945 290-290 290z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="mailto:vonteddudivakar@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                          >
                            <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104L64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025L384 217.775z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="mailto:vonteddudivakar@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                          >
                            <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="mailto:vonteddudivakar@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                          >
                            <path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
          <main className="hero is-fullheight">
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
            <div className="hero-foot mb-4 has-text-centered">
              <span className="icon is-bouncing">
>>>>>>> 4806c665d7a62f0b472cfa42d9231db2440c01d6
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#fff"
                >
                  <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
                </svg>
              </span>
<<<<<<< HEAD
            </button>
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
      </Layout>
=======
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
>>>>>>> 4806c665d7a62f0b472cfa42d9231db2440c01d6
    );
  }
}
