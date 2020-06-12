import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './utils/history';
import AuthCheck from './utils/authcheck';
import Home from './hooks/home';
import Header from './hooks/header';
import Login from './hooks/login'


const Routes = () => {
  return (
    <div>
      <AuthCheck />
      <Router history={history} >
        <Header />
        <br />
        <br />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/authcheck' component={AuthCheck} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}



export default Routes;
