import * as React from "react";
import { Link, PageProps } from "gatsby";
import { Helmet } from "react-helmet";

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
  excelsior(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  override render() {
    return (
      <>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          defer={false}
        >
          <title>
            {((s: string): string =>
              ["about", "testimonials", ""].includes(s)
                ? !!s
                  ? `${s[0]?.toUpperCase()}${s.slice(1)} | Divakar`
                  : "Divakar | Fitter, Healthier, Happier"
                : "Not Found | Divakar")(
              window.location.pathname.replace(/\//g, "")
            )}
          </title>
          <link
            rel="canonical"
            href={typeof window !== "undefined" ? window.location.href : ""}
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="index" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="description"
            content="Get fit in 30 days with Divakar, a certified, professional gym trainer and body transformation specialist. Start today and get fitter, healthier, happier."
          />
          <meta
            name="keywords"
            content="Divakar Vonteddu, Akshaj Jagarapu, Personal Trainer, Gym Trainer, Body Transformation Specialist"
          />
          <meta name="author" content="Akshaj Jagarapu" />
          <meta name="image" content="https://divakar.fitness/i.png" />
          <meta
            property="og:title"
            content="Divakar, Professional Gym Trainer"
          />
          <meta
            property="og:url"
            content={typeof window !== "undefined" ? window.location.href : ""}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Get fit in 30 days with Divakar, a certified, professional gym trainer and body transformation specialist. Start today and get fitter, healthier, happier."
          />
          <meta name="og:image" content="https://divakar.fitness/i.png" />
          <meta
            name="twitter:title"
            content="Divakar, Professional Gym Trainer"
          />
          <meta
            property="twitter:url"
            content={typeof window !== "undefined" ? window.location.href : ""}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@divakarvonteddu" />
          <meta
            property="twitter:description"
            content="Get fit in 30 days with Divakar, a certified, professional gym trainer and body transformation specialist. Start today and get fitter, healthier, happier."
          />
          <meta name="twitter:image" content="https://divakar.fitness/i.png" />
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://divakar.fitness",
          "name": "Divakar, Professional Gym Trainer",
          "url": "https://divakar.fitness",
          "logo":
            "https://divakar.fitness/i.png",
          "image": [
            "https://divakar.fitness/m.png",
            "https://divakar.fitness/c.png"
          ],
          "telephone": "+918074623617",
          "description": "Get fit in 30 days with Divakar, a certified, professional gym trainer and body transformation specialist. Start today and get fitter, healthier, happier.",
          "speakable": {
            "@type": "SpeakableSpecification",
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          }
        }
      `}
          </script>
        </Helmet>
        <nav
          className="navbar has-shadow is-fixed-top"
          role="navigation"
          aria-label="Main Navigation"
        >
          <header className="container">
            <div className="navbar-brand">
              <Link
                className="navbar-item is-size-3 mr-6"
                to="/"
                onClick={() =>
                  this.setState({
                    activeMenu: false,
                  })
                }
              >
                <strong>Divakar</strong>
              </Link>
              <a
                role="button"
                className={`navbar-burger mt-2 ${
                  this.state.activeMenu ? "is-active" : ""
                }`}
                aria-label="menu"
                aria-expanded="false"
                data-target="mainNavbar"
                onClick={() =>
                  this.setState({
                    activeMenu: !this.state.activeMenu,
                  })
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
                this.state.activeMenu ? "is-active" : ""
              }`}
              onClick={() =>
                this.setState({
                  activeMenu: false,
                })
              }
            >
              <div className="navbar-start pl-2">
                <Link className="navbar-item" to="/testimonials/">
                  Testimonials
                </Link>
                <Link className="navbar-item" to="/about/">
                  About
                </Link>
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
                          fill="#363636"
                          height={24}
                          width={24}
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
                          fill="#363636"
                          height={24}
                          width={24}
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
                          fill="#363636"
                          height={24}
                          width={24}
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
                          fill="#363636"
                          height={24}
                          width={24}
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
                          fill="#363636"
                          height={24}
                          width={24}
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </nav>
        <div className="container">
          {this.props.children}
          <section className="section is-medium has-text-centered">
            <h2 className="title is-size-2 is-size-2-2">Start Today.</h2>
            <div className="buttons mt-3 are-medium is-inline-block">
              <a
                className="button is-primary mx-3"
                href="tel:+918074623617"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call Me
              </a>
              <a
                className="button is-info mx-3"
                href="mailto:vonteddudivakar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>
            </div>
          </section>
        </div>
        <footer className="footer has-text-centered">
          <div className="container">
            <nav className="level p-6 has-text-centered">
              <div className="level-item">
                <a
                  href="tel:+918074623617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="title">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#363636"
                        height={24}
                        width={24}
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z" />
                      </svg>
                    </span>
                  </p>
                  <p className="heading copy is-size-7 has-text-primary pt-2">
                    +91 80746-23617
                  </p>
                </a>
              </div>
              <div className="level-item">
                <a
                  href="mailto:vonteddudivakar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="title">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#363636"
                        height={24}
                        width={24}
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6l154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4l173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                      </svg>
                    </span>
                  </p>
                  <p className="heading copy is-size-7 has-text-primary pt-2">
                    vonteddudivakar@gmail.com
                  </p>
                </a>
              </div>
              <div className="level-item">
                <a
                  href="https://goo.gl/maps/Q5QrKuWUzpRb7FqZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="title">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        fill="#363636"
                        height={24}
                        width={24}
                      >
                        <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 00-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 01-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 014.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 003.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z" />
                      </svg>
                    </span>
                  </p>
                  <p className="heading copy is-size-7 has-text-primary pt-2">
                    Rajamahendravaram
                  </p>
                </a>
              </div>
              <div className="level-item">
                <button
                  aria-label="Scroll Up"
                  className="button mt-4 is-small is-info"
                  onClick={this.excelsior}
                >
                  Back to Top
                </button>
              </div>
            </nav>
            <small>
              <a
                className="copy has-text-black"
                href="https://govirtuoso.org/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;© {new Date().getFullYear()}, Akshaj Jagarapu. All rights
                reserved.
              </a>
            </small>
          </div>
        </footer>
      </>
    );
  }
}
