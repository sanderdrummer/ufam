import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import { Intro } from '../components/intro/intro';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = 'U Fam';
    const siteDescription = 'hi';
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Intro />
      </Layout>
    );
  }
}
export default BlogIndex;
