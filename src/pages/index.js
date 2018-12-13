import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = "U Fam";
    const siteDescription = "hi";
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={siteTitle}
        />
        <div style={{ margin: "3rem 0" }}>
          Hello World we are UFam and this will be extraordinary, exceptional or
          simply beautiful
        </div>
      </Layout>
    );
  }
}
export default BlogIndex;
