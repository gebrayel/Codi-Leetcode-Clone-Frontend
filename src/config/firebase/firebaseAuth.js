import * as firebase from 'firebase';
import login from '../../api/login/login';

const providerGoogle = new firebase.default.auth.GoogleAuthProvider();
const providerGitHub = new firebase.default.auth.GithubAuthProvider();

/**
 * Hacer login con Google
 * @param {Function} setUser Setear usuario global
 */

const loginWithGoogle = async (setUser) => {
  try {
    const result = await firebase.default.auth().signInWithPopup(providerGoogle);
    if(result){
      const user = result.user;
      return await login.postLogin(user, setUser);
    }
  }
  catch(error){
    return error;
  }
}

/**
 * Hacer login con GitHub
 * @param {Function} setUser Setear usuario global
 */
const loginWithGithub = async (setUser) => {
  try {
    const result = await firebase.default.auth().signInWithPopup(providerGitHub);
    if(result){
      const user = result.user;
      return await login.postLogin(user, setUser);
    }
  }
  catch(error){
    return error;
  }
}

export default {
  loginWithGoogle,
  loginWithGithub
}

