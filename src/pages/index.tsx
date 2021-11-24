import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/pages/index/_all.scss"

export default class IndexPage extends React.Component<{}, {}> {
  override render() {
    return (
      <>
        <main className="hero is-fullheight-with-navbar has-text-centered">
          <div className="hero-body">
            <div className="column">
              <h1 className="title is-size-2-1 is-size-2-mobile is-1">
                Experienced.
                <br />
                Certified.
                <br />
                Trainer.
              </h1>
              <div className="buttons mt-3 are-medium is-inline-block">
                <a
                  className="button is-primary mx-3"
                  href="tel:+918074623617"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Phone"
                >
                  Call Me
                </a>
                <a
                  className="button is-info mx-3"
                  href="mailto:vonteddudivakar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </main>
        <section className="section columns is-medium is-centered is-vcentered">
          <div className="column is-6">
            <h2 className="title is-2 is-size-2-2">
              30 Days.
              <br />
              Get Fit.
            </h2>
            <div className="is-size-5 is-size-6-mobile pt-4">
              <div className="icon-text block is-flex-wrap-nowrap">
                <span className="icon mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={36}
                    height={36}
                    fill="#0d6efd"
                  >
                    <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                  </svg>
                </span>
                Customized diet and workout plans
              </div>
              <div className="icon-text block is-flex-wrap-nowrap">
                <span className="icon mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={36}
                    height={36}
                    fill="#0d6efd"
                  >
                    <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                  </svg>
                </span>
                Natural body transformation
              </div>
              <div className="icon-text block is-flex-wrap-nowrap">
                <span className="icon mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={36}
                    height={36}
                    fill="#0d6efd"
                  >
                    <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                  </svg>
                </span>
                Healthy weight-loss programs
              </div>
              <div className="icon-text block is-flex-wrap-nowrap">
                <span className="icon mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={36}
                    height={36}
                    fill="#0d6efd"
                  >
                    <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                  </svg>
                </span>
                Certified, flexible service guarantee
              </div>
            </div>
          </div>
          <div className="column box is-6 p-6 has-background-info is-hidden-mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 416 512"
              fill="#fff"
              width="50%"
              height="100%"
            >
              <path d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              className="pl-6"
              width="50%"
              height="100%"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
          </div>
        </section>
        <section className="section is-medium has-text-centered">
          <h2 className="title is-size-2-2 is-2">
            Build Muscle.
            <br />
            Lose Weight.
          </h2>
          <Link
            className="button is-primary is-medium mt-3"
            to="/testimonials/"
          >
            See Testimonials
          </Link>
        </section>
        <section className="section is-small sl columns is-5 is-vcentered is-mobile">
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/1.png"
              alt="Client 1 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/2.png"
              alt="Client 2 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/3.png"
              alt="Client 3 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/4.png"
              alt="Client 4 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/5.png"
              alt="Client 5 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/6.png"
              alt="Client 6 before and after gym workouts."
            />
          </div>
          <div className="column box m-4 is-3 has-background-info is-focusable">
            <StaticImage
              src="../images/7.png"
              alt="Client 7 before and after gym workouts."
            />
          </div>
        </section>
      </>
    )
  }
}
