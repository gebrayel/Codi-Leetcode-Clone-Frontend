import firebase from 'firebase';
import login from '../../api/login/login';

var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerGithub = new firebase.auth.GithubAuthProvider();

/**
 * Hacer login con Google
 * @param {Function} setUser Setear usuario global
 */
const loginWithGoogle = (setUser) => {
  firebase.auth()
    .signInWithPopup(providerGoogle)
    .then((result) => {
      const user = result.user;
      login.postLogin(user, setUser);
    }).catch((error) => {
      return error;
    });
}

/**
 * Hacer login con GitHub
 * @param {Function} setUser Setear usuario global
 */
const loginWithGithub = (setUser) => {
    firebase
      .auth()
      .signInWithPopup(providerGithub)
      .then((result) => {
        const user = result.user;
        login.postLogin(user, setUser);
      }).catch((error) => {
          return error;
      });
}

export default {
  loginWithGoogle,
  loginWithGithub
}

