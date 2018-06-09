import React from 'react';
import { Helmet } from 'react-helmet';

const HomeView: React.StatelessComponent<{}> = () => (
  <section>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>

    <h1>Home Page</h1>
  </section>
);

export default HomeView;
