import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

export default class AboutPage extends React.Component<{}, {}> {
  private scrollRef: React.RefObject<HTMLButtonElement> =
    React.createRef<HTMLButtonElement>();

  override render() {
    return (
      <Layout title="About">
        <main className="hero is-fullheight has-text-centered">
          <div className="hero-body">
            <div className="column">
              <h1 className="title is-size-2-1 is-size-2-mobile is-1">
                Hello.
                <br />I am <span className="has-text-info">Divakar</span>
                <br />
                <span className="has-text-primary">Vonteddu</span>.
              </h1>
            </div>
          </div>
          <div className="hero-foot mb-6 pb-6">
            <button
              aria-label="Scroll Down"
              className="button is-black is-inverted is-bouncing"
              onClick={() => this.scrollRef.current?.scrollIntoView()}
              ref={this.scrollRef}
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#fff"
                  height={36}
                  width={36}
                >
                  <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
                </svg>
              </span>
            </button>
          </div>
        </main>
        <section className="section columns is-medium is-centered is-vcentered has-text-centered">
          <div className="column is-6">
            <h2 className="title is-2 is-size-2-2">
              Champion
              <br />
              Weight Lifter
            </h2>
            <h3 className="subtitle"></h3>
          </div>
          <div className="column box is-6 m-6 has-background-info">
            <StaticImage
              src="../images/m.png"
              alt="A picture of Divakar Vonteddu."
            />
          </div>
        </section>
        <section className="section is-large has-text-centered">
          <h2 className="title is-2 is-size-2-2">
            Certified
            <br />
            Trainer.
          </h2>
          <div className="box is-6 m-6 has-background-primary">
            <StaticImage
              src="../images/c.png"
              alt="A picture of Divakar Vonteddu's certificate."
            />
          </div>
        </section>
      </Layout>
    );
  }
}
