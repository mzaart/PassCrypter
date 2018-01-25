import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, Switch, Router, HashRouter } from 'react-router-dom';
import {WelcomeComponent} from './screens/welcome/WelcomeComponent';

class App extends React.Component<any, any> {

  /*
    TODO implement:
    <Route path='/manage' component={Accounts}/>
  */

  render() {
    return(
      <Switch>
        <Route path='/' component={WelcomeComponent}/>
      </Switch>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('app')
);
