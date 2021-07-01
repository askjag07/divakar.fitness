import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import '../styles/index.scss';

export default class IndexPage extends React.Component<{}, {}> {
  private scrollRef: React.RefObject<HTMLButtonElement> =
    React.createRef<HTMLButtonElement>();

  override render() {
    return (
      <Layout>
        <main className="hero is-fullheight has-text-centered">
          <div className="hero-body">
            <div className="column">
              <h1 className="title is-1">
                Experienced.
                <br />
                Certified.
                <br />
                Trainer.
              </h1>
              <div className="buttons is-grouped is-inline">
                <a
                  className="button is-medium is-primary mt-5 mr-4"
                  href="tel:+918074623617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#fff"
                      height={24}
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z" />
                    </svg>
                  </span>
                  <span>&nbsp;Call Me</span>
                </a>
                <a
                  className="button is-medium is-info mt-5 ml-4"
                  href="mailto:vonteddudivakar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#fff"
                      height={24}
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6l154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4l173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                    </svg>
                  </span>
                  <span>&nbsp;Email Me</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot mb-5">
            <button
              className="button is-black is-inverted is-bouncing"
              onClick={() => this.scrollRef.current?.scrollIntoView()}
              ref={this.scrollRef}
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#fff"
                >
                  <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
                </svg>
              </span>
            </button>
          </div>
        </main>
        <section className="section is-medium has-text-centered">
          <h2 className="title is-2">
            Build Muscle.
            <br />
            Lose Weight.
          </h2>
          <Link
            className="button is-primary is-medium mt-5"
            to="/testimonials/"
          >
            See Testimonials
          </Link>
        </section>
        <section className="sl columns is-5 is-vcentered is-centered is-mobile p-0 m-0">
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/1.png"
              alt="Client 1 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/2.png"
              alt="Client 2 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/3.png"
              alt="Client 3 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/4.png"
              alt="Client 4 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/5.png"
              alt="Client 5 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/6.png"
              alt="Client 6 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/7.png"
              alt="Client 7 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/1.png"
              alt="Client 1 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/2.png"
              alt="Client 2 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/3.png"
              alt="Client 3 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/4.png"
              alt="Client 4 before and after gym workouts."
            />
          </div>
          <div className="column box mx-4 is-3 has-background-info">
            <StaticImage
              src="../images/5.png"
              alt="Client 5 before and after gym workouts."
            />
          </div>
        </section>
        <section className="section is-large">
          <h2 className="title is-2">In 90 Days.</h2>
          <div className="subtitle is-size-5 pt-6">
            <div className="icon-text block">
              <span className="icon mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={36}
                  height={36}
                  fill="#b86bff"
                >
                  <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                </svg>
              </span>
              Increased confidence and stamina
            </div>
            <div className="icon-text block">
              <span className="icon mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={36}
                  height={36}
                  fill="#b86bff"
                >
                  <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                </svg>
              </span>
              No more severe pain and sickness
            </div>
            <div className="icon-text block">
              <span className="icon mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={36}
                  height={36}
                  fill="#b86bff"
                >
                  <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z" />
                </svg>
              </span>
              10+ years of health after retirement
            </div>
          </div>
        </section>
        <section className="section is-medium has-text-centered">
          <h3 className="title">Results in 90 days</h3>
          <h4 className="subtitle">That's it for today. Bye!</h4>
        </section>
      </Layout>
    );
  }
}
