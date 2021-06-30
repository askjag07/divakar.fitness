import * as React from 'react';
import { Link, PageProps } from 'gatsby';

export default class Layout extends React.Component<
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
            className="navbar is-fixed-top has-shadow"
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
                  className={`navbar-burger mt-2 ${
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
                  <a className="navbar-item" href="/">
                    Testimonials
                  </a>
                  <a className="navbar-item" href="/">
                    About
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
                            viewBox="0 0 512 512"
                            fill="#fff"
                            height={24}
                          >
                            <path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z" />
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
                            viewBox="0 0 512 512"
                            fill="#fff"
                            height={24}
                          >
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6l154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4l173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="https://www.facebook.com/divakar.vonteddu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            fill="#fff"
                            height={24}
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="https://twitter.com/divakarvonteddu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="#fff"
                            height={24}
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="button is-inverted is-black"
                        href="https://www.instagram.com/vonteddudivakar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                            height={24}
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
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
        <div className="container">{this.props.children}</div>
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
