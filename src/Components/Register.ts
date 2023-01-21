// /* eslint-disable no-new */
// import { initializeApp } from 'firebase/app';
// import {
//   // getFirestore,
//   // getAuth,
//   // onAuthStateChanged,
//   // signOut,
//   createUserWithEmailAndPassword,
//   // signInWithEmailAndPassword,
//   // AuthErrorCodes,
//   // signInWithPopup,
//   // GoogleAuthProvider,
//   updateProfile,
// } from 'firebase/auth';
// import {
//   // getFirestore,
//   // getDocs,
//   // onSnapshot,
//   // doc,
//   // deleteDoc,
//   // collection,
//   addDoc,
//   // setDoc,
// } from 'firebase/firestore';
// import Component from '../lib/Component';

// class RegisterComponent extends Component {
//   constructor() {
//     super({
//       name: 'Register',
//       model: {},
//     });
//   }

//   // eslint-disable-next-line class-methods-use-this
//   render() {
//     const registerDiv = document.createElement('div');
//     registerDiv.innerHTML = `
//     <div class="register">
//       <div class="backArrow" id="backLogin">
//         <svg xmlns="http://www.w3.org/2000/svg" width="18.634" height="30.704" viewBox="0 0 18.634 30.704">
// eslint-disable-next-line max-len
//           <path id="Icon_awesome-chevron-left" data-name="Icon awesome-chevron-left" d="M2.427,16.807,16.092,3.142a1.688,1.688,0,0,1,2.386,0l1.594,1.594a1.688,1.688,0,0,1,0,2.384L9.245,18l10.83,10.881a1.687,1.687,0,0,1,0,2.384l-1.594,1.594a1.688,1.688,0,0,1-2.386,0L2.427,19.193A1.688,1.688,0,0,1,2.427,16.807Z" transform="translate(-1.933 -2.648)"/>
//         </svg>
//       </div>
//       <h3>Registreer hier.</h3>
//       <form class="register__form">
//         <label for="signupEmail">Email</label>
//         <input type="email" name="email" id="signupEmail" />
//         <div id="errorEmailRegister" class="errorlabel">Error message</div>
//         <label for="signupUsername">Gebruikersnaam</label>
//         <input type="text" name="signupUsername" id="signupUsername" />
//         <label for="signupPassword">Password</label>
//         <input type="password" name="password" id="signupPassword" />
//         <div id="errorPasswordRegister" class="errorlabel">Error message</div>
//         <div id="divRegisterError" class="groep">
//           <div id="errorMessage" class="errorlabel">Error message</div>
//         </div>
//         <button id="btnSignup" type="button">Registreer</button>
//       </form>
//     </div>
//     `;
//     // AUTH

//     // Signup
//     const signupEmail : HTMLElement | any = document.querySelector('#signupEmail');
//     const signupPassword : HTMLElement | any = document.querySelector('#signupPassword');
//     const signupUsername : HTMLElement | any = document.querySelector('#signupUsername');

//     const createAccount = async () => {
//       // console.log('Account aangemaakt!');
//       const email = signupEmail.value;
//       const password = signupPassword.value;
//       const gebruikersnaam = signupUsername.value;
//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         updateProfile(auth.currentUser, {
//           displayName: gebruikersnaam,
//         });
//         await addDoc(collectionUsers, {
//           email: signupEmail.value,
//           gebruikersnaam: signupUsername.value,
//           wachtwoord: signupPassword.value,
//         });
//         addUserForm.reset();
//       } catch (error) {
//         console.log(`There was an error: ${error}`);
//         showRegisterError(error);
//       }
//     };
//     return registerDiv;
//   }
// }

// export default RegisterComponent;
