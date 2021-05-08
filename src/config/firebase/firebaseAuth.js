import firebase from 'firebase'

var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerGithub = new firebase.auth.GithubAuthProvider();
// var admin = require('firebase-admin');


/**
 * Loguear con redireccionamiento General utilizando el provider para la autenticacion y Log in
 * @param {FirebaseProvider} provider 
 */

const GeneralLoginWithRedirect=(provider)=>{
    firebase.auth().signInWithRedirect(provider);
}


/**
 * Loguear con cuenta Google
 */

const loginWithGoogle=()=>{

    firebase.auth()
  .signInWithPopup(providerGoogle)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


}


/**
 * Log out General de cualquier cuenta que se haya hecho Log in
 */

const GeneralLogOut=()=>{
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });

}



/**
 * Loguear con cuenta de Github
 */

const loginWithGithub=()=>{
    firebase
  .auth()
  .signInWithPopup(providerGithub)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


/**
 * // También puedes usar la propiedad currentUser para obtener el usuario que accedió. 
  //Si no accedió ningún usuario, el valor de currentUser es nulo:

 */
const getUser=()=>{
  

  var user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
}



/**
 * obtener el usuario actual es establecer un observador en el objeto Auth:
 */
const getUserLogged=()=>{
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}


/**
 * get Object user profile info
 */

const getUserProfileInfo=()=>{
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  var userP={}
  if (user != null) {
    userP={
      name : user.displayName,
      email : user.email,
      photoUrl : user.photoURL,
      emailVerified : user.emailVerified,
      uid : user.uid  // The user's ID, unique to the Firebase project. Do NOT use
                      // this value to authenticate with your backend server, if
                      // you have one. Use User.getToken() instead.
    }
    console.log(userP)
  }
  
  return userP;
  
}

/**
 * Obtén la información de perfil de un usuario de un proveedor específico
 */

const getUserProfile=()=>{
  var user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
}


/**
 * actualizar el perfil de un usuario
 */

const UpdateUserProfile=()=>{
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}












// /**
//  * Obtener un usuario a traves del uid de Google Firebase
//  * @param {String} uid 
//  */
// const getUserByUid=(uid)=>{
//     admin
//   .auth()
//   .getUser(uid)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
// }



// /**
//  * Obtener un usuario a traves del email
//  * @param {String} email 
//  */
// const getUserByEmail=(email)=>{
//     admin
//   .auth()
//   .getUserByEmail(email)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
// }





// /**
//  * FUNCION QUE DEVUELVE TODOS LOS USUARIOS REGISTRADOS ===> PUEDE QUE SEA IMPORTANTE 
//  * PARA SACAR EL MODULO DE ESTADISTICAS
//  * @param {*} nextPageToken 
//  */

// const listAllUsers = (nextPageToken) => {
//   // List batch of users, 1000 at a time.
//   admin
//     .auth()
//     .listUsers(1000, nextPageToken)
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('user', userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
// };
// // Start listing users from the beginning, 1000 at a time.
// listAllUsers();


// /**
//  * Actualizar la data o informacion de un usuario ===> FUNCION AUN EN DISCUSION
//  * @param {String} uid 
//  */
// const updateUser=(uid)=>{
//     // MODIFICAR FUNCION EN DEPENDENCIA DE QUE ES LO QUE SE VA A A ACTUALIZAR
//     admin
//   .auth()
//   .updateUser(uid, {
//     email: 'modifiedUser@example.com',
//     phoneNumber: '+11234567890',
//     emailVerified: true,
//     password: 'newPassword',
//     displayName: 'Jane Doe',
//     photoURL: 'http://www.example.com/12345678/photo.png',
//     disabled: true,
//   })
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully updated user', userRecord.toJSON());
//   })
//   .catch((error) => {
//     console.log('Error updating user:', error);
//   });

// }




/*
    Propiedades basicas de los usuarios que se pueden obtener en Firebase 

    Propiedad	         Tipo	                             Descripción
    uid	                string	        El uid que se asignará al usuario recién creado. Debe ser una string que contenga entre 1 y 128 caracteres. Si no se proporciona, se generará automáticamente un uid aleatorio.
    email	            string	        El correo electrónico principal del usuario. Debe ser un correo electrónico válido.
    emailVerified       booleano	    Indica si se verificó el correo electrónico principal del usuario. Si no se proporciona, el valor predeterminado es false.
    phoneNumber	        string	        El número de teléfono principal del usuario. Debe ser un número de teléfono válido que cumpla con las especificaciones E.164.
    password	        string	        La contraseña del usuario, sin encriptación. Debe tener al menos seis caracteres.
    displayName	        string	        El nombre visible del usuario.
    photoURL	        string	        La URL de la foto del usuario.
    disabled	        booleano	    Si el usuario está inhabilitado o no. true indica que está inhabilitado; false indica que está habilitado. Si no se proporciona, el valor predeterminado es false.
*/



export {
            loginWithGoogle,
            loginWithGithub,
            GeneralLoginWithRedirect, 
            GeneralLogOut,
            providerGithub,
            providerGoogle,
            getUserProfileInfo
}

