import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default class AboutPage extends React.Component<{}, {}> {
  override render() {
    return (
      <>
        <main className="hero is-fullheight-with-navbar has-text-centered">
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
        </main>
        <section className="section columns is-large is-centered is-vcentered has-text-centered">
          <div className="column is-6">
            <h2 className="title is-2 is-size-2-2">
              Weightlift
              <br />
              Champion
            </h2>
          </div>
          <div className="column my-6 mx-3 box is-6 has-background-info">
            <StaticImage
              src="../../static/m.png"
              alt="A picture of Divakar Vonteddu."
            />
          </div>
        </section>
        <section className="section is-large has-text-centered">
          <h2 className="title is-2 is-size-2-2">
            Certified
            <br />
            Trainer
          </h2>
          <div className="box is-6 m-6 has-background-primary">
            <StaticImage
              src="../../static/c.png"
              alt="A picture of Divakar Vonteddu's certificate."
            />
          </div>
        </section>
      </>
    )
  }
}
