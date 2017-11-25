import React, { Component } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Layout from 'Components/Layout';
import Main from 'Page/Main';

const AppRouter = ({history}) => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Router path="/" component={Main} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default AppRouter;
