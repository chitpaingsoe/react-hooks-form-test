import history from './history';

export default class Auth {

  userProfile = {}

  login = () => {
    //login code here
    this.handleAuth();
  }

  handleAuth = () => {
    const authResult = {
      accessToken: "JOEJWKRJOEJROWEIRWERWEREWRRR",
      idToken: "FKJEERaccessToken",
      expiresIn: 800000
    }
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)

    let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
    localStorage.setItem('expiresAt', expiresAt)

    this.getProfile();
    setTimeout(() => { history.replace('/authcheck') }, 600);

  }

  getAccessToken = () => {
    if (localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }


  getProfile = () => {
    this.userProfile = {}
  }


  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}
