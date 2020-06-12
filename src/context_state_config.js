import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';
import * as AuthReducer from './store/reducers/auth_reducer';
import Routes from './routes';

import Auth from './utils/auth';


const auth = new Auth()


const ContextState = () => {

  /*
    Auth Reducer
  */
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
    AuthReducer.initialState)


  const handleLogin = () => {
    dispatchAuthReducer(ACTIONS.login_success())
  }

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.login_failure())
  }

  const handleAddProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.add_profile(profile))
  }

  const handleRemoveProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_profile())
  }



  //Handle authentication from callback
  const handleAuthentication = (props) => {
    if (props.location.hash) {
      auth.handleAuth()
    }
  }



  return (
    <div>
      <Context.Provider
        value={{

          //Auth Reducer
          authState: stateAuthReducer.is_authenticated,
          profileState: stateAuthReducer.profile,
          handleUserLogin: () => handleLogin(),
          handleUserLogout: () => handleLogout(),
          handleUserAddProfile: (profile) => handleAddProfile(profile),
          handleUserRemoveProfile: () => handleRemoveProfile(),

          //Handle auth
          handleAuth: (props) => handleAuthentication(props),
          authObj: auth
        }}>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default ContextState;
