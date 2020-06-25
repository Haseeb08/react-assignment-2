/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import JwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/home";
const LOGIN_FAILURE_PAGE = "/";
export default class Auth {
  auth = new auth0.WebAuth({
    domain: "dev-8ohkfl9v.us.auth0.com",
    clientID: "uRN20KXRzblyDH53BcO96cs24AnLNd6T",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://dev-8ohkfl9v.us.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile",
  }); 
  constructor() {
    this.login = this.login.bind(this);
  //  this.customLogin = this.customLogin.bind(this);
  }

  login() {
    this.auth.authorize();
  }
//   customLogin(username, password) {
//     this.auth.login(
//       {
//         realm: "Username-Password-Authentication",
//         username: username,
//         password: password,
//       },()=>
//      this.handleAuthentication()
//     );
//   }

//   customSignup(username, password) {
//     this.auth.signup(
//       {
//         connection: "Username-Password-Authentication",
//         email: username,
//         password: password,
//       },(err)=>{
//       if (err) return alert('Something went wrong: ' + err.message); 
//       return alert('success signup without login!') }
//     );
//   }


  handleAuthentication() {
    this.auth.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  }
  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE_PAGE;
  }
  getProfile() {
    if (localStorage.getItem("id_token"))
      return JwtDecode(localStorage.getItem("id_token"));
    else return {};
  }
}
