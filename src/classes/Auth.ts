
import { WebAuth, AuthOptions } from 'auth0-js'

const authOpts: AuthOptions = {
  domain: 'bpanz.au.auth0.com',
  clientID: 'xSVHzTpoIKmgJ6wwIHM9mkfWtmMnO7Ml',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://bpanz.au.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
}

export default class Auth {
  private auth0 = new WebAuth(authOpts)

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  public login() {
    this.auth0.authorize()
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // history.replace('/home')
      } else if (err) {
        // history.replace('/home')
        console.log(err)
      }
    })
  }

  setSession(authResult: any) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    // history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
  }

}