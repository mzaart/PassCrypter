import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, Switch, Router, HashRouter } from 'react-router-dom';
import {RegisterComponent} from './screens/welcome/RegisterComponent';

class App extends React.Component<any, any> {

  /*
    To be implemented:
    <Route path='/' component={Welcome}/>
    <Route path='/manage' component={Manage}/>
    <Route path='/contact' component={contact}/>
    <Route path='/Settings' component={Settings}/>
  */

  render() {
    return(
      <Switch>
        <Route path='/' component={RegisterComponent}/>
      </Switch>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById("app")
);
