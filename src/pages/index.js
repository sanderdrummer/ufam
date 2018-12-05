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
        Hi there
        <Link to={"blog"}>blog</Link>
      </Layout>
    );
  }
}
export default BlogIndex;
