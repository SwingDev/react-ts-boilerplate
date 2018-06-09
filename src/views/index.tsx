import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import routes from 'root/routes';

import HomeView from 'views/home';

const RootView: React.StatelessComponent<{}> = () => (
  <Fragment>
    <Helmet
      titleTemplate='React TypeScript Boilerplate - %s'
      defaultTitle='React TypeScript Boilerplate'
    />

    <main>
      <Switch>
        <Route path={routes.ROOT} component={HomeView}/>
      </Switch>
    </main>
  </Fragment>
);

export default RootView;
