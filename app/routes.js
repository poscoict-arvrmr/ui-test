/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import MenuPage from './containers/MenuPage';
import FilesPage from './containers/FilesPage';
import CameraPage from './containers/CameraPage';
import SettingsPage from './containers/SettingsPage';

//stateless function component 인것 같음.
export default () => (
  <App wifi={navigator.onLine}>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/menu" component={MenuPage} />      
      <Route path="/myfiles" component={FilesPage} />
      <Route path="/mycamera" component={CameraPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
      
    </Switch>
  </App>
);
