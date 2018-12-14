import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

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
        there will be music and stuff
      </Layout>
    );
  }
}
export default BlogIndex;
