import * as React from "react"
import { Link } from "gatsby"

export default class NotFoundPage extends React.Component<{}, {}> {
  override render() {
    return (
      <>
        <main className="hero is-fullheight-with-navbar has-text-centered">
          <div className="hero-body">
            <div className="column">
              <h1 className="title is-size-2-1 is-size-2-mobile is-1">
                Page
                <br />
                Not Found
              </h1>
              <Link className="button is-primary mt-3 is-medium" to="/">
                Go Home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
}
