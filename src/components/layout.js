import React from 'react';

import { Header } from './header';
import { rhythm } from '../utils/typography';
import { Footer } from './footer';
import { NavBar } from './navbar';

class Layout extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="layout">
          <Header />
          <section
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(32),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}>
            {this.props.children}
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
