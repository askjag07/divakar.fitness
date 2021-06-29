import * as React from 'react';

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
    );
  }
}
