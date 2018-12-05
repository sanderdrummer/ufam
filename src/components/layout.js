import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
