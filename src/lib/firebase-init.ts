import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// FIREBASE

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAk9DFbDqb94mbH4MDnYq3k8Bz9vUcVPyI',
  authDomain: 'what-s-a-student-to-do-62d5d.firebaseapp.com',
  projectId: 'what-s-a-student-to-do-62d5d',
  storageBucket: 'what-s-a-student-to-do-62d5d.appspot.com',
  messagingSenderId: '192194215417',
  appId: '1:192194215417:web:9cf88420428a8dd5559128',

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// constanten
const auth : any = getAuth(firebaseApp);
const login = document.querySelector('.login') as HTMLElement;
const register = document.querySelector('.register') as HTMLElement;
const app = document.querySelector('.application') as HTMLElement;
const btnSignup = document.querySelector('#btnSignup') as HTMLElement;
const btnLogin = document.querySelector('#btnLogin') as HTMLElement;
const btnGoogle : HTMLElement | any = document.querySelector('#btnGoogle');
const btnLogout = document.querySelector('#btnLogout') as HTMLElement;
const btnSignupForm = document.querySelector('.login-to-register') as HTMLElement;
const divLoginError : HTMLElement | any = document.querySelector('#divLoginError');
const divRegisterError : HTMLElement | any = document.querySelector('#divRegisterError');
const errorMessage : HTMLElement | any = document.querySelector('#errorMessage');
const errEmail : HTMLElement | any = document.querySelector('#errorEmail');
const errPassword : HTMLElement | any = document.querySelector('#errorPassword');
const errEmailRegister : HTMLElement | any = document.querySelector('#errorEmailRegister');
const errPasswordRegister : HTMLElement | any = document.querySelector('#errorPasswordRegister');
const backLogin : HTMLElement | any = document.querySelector('#backLogin');

// displayen forms
const showRegister = () => {
  login.style.display = 'none';
  app.style.display = 'none';
  register.style.display = 'block';
};

const showLogin = () => {
  login.style.display = 'block';
  app.style.display = 'none';
  register.style.display = 'none';
};

// showApp
const showApp = () => {
  // usersIngelogd.style.display = 'block';
  login.style.display = 'none';
  app.style.display = 'block';
  // profiel.style.display = 'none';
  register.style.display = 'none';
  // chat.style.display = 'none';
  // chats.style.display = 'block';
  // addChats.style.display = 'block';
  // deleteChats.style.display = 'block';
  // inputSearch.style.display = 'block';
};

// Hier gaan we de errors monitoren van de authenticatie

const hideLoginError = () => {
  divLoginError.style.display = 'none';
  errEmail.style.display = 'none';
  errPassword.style.display = 'none';
  errorMessage.innerHTML = '';
  errEmail.innerHTML = '';
  errPassword.innerHTML = '';
};
const hideRegisterError = () => {
  divRegisterError.style.display = 'none';
  errEmailRegister.style.display = 'none';
  errPasswordRegister.style.display = 'none';
  errorMessage.innerHTML = '';
  errEmailRegister.innerHTML = '';
  errPasswordRegister.innerHTML = '';
};

const showLoginError = (error : any) => {
  divLoginError.style.display = 'block';
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    errorMessage.innerHTML = 'ERROR';
    errPassword.innerHTML = 'Wachtwoord is fout.';
    errPassword.style.display = 'block';
  } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
    errorMessage.innerHTML = 'ERROR';
    errEmail.innerHTML = 'E-mail is fout.';
    errEmail.style.display = 'block';
  } else {
    errorMessage.innerHTML = `Error: ${error.message}`;
  }
};

const showRegisterError = (error : any) => {
  divRegisterError.style.display = 'block';
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    errorMessage.innerHTML = 'ERROR';
    errEmailRegister.innerHTML = 'E-mail is al reeds in gebruik.';
    errEmailRegister.style.display = 'block';
  } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
    errorMessage.innerHTML = 'ERROR';
    errEmailRegister.innerHTML = 'Ongeldig emailadres.';
    errPasswordRegister.style.display = 'block';
    errEmailRegister.style.display = 'block';
  } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
    errorMessage.innerHTML = 'ERROR';
    errPasswordRegister.innerHTML = 'Wachtwoord te zwak. Minstens 6 karakters.';
    errPasswordRegister.style.display = 'block';
  } else {
    errorMessage.innerHTML = `Error: ${error.message}`;
  }
};

const authState : HTMLElement | any = document.querySelector('.authState');
const showLoginState = (user : any) => {
  authState.innerHTML = `You're logged in as ${user.email}`;
};

// AUTH

// Signup
const signupEmail : HTMLElement | any = document.querySelector('#signupEmail');
const signupPassword : HTMLElement | any = document.querySelector('#signupPassword');

const createAccount = async () => {
  console.log('Account aangemaakt!');
  const email = signupEmail.value;
  const password = signupPassword.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showRegisterError(error);
  }
};

// Login
const logEmail : HTMLElement | any = document.querySelector('#signupEmail');
const logPassword : HTMLElement | any = document.querySelector('#signupPassword');

const loginEmailPassword = async () => {
  const loginEmail = logEmail.value;
  const loginPassword = logPassword.value;

  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

// Login met Google
const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential : any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(`There was an error: ${error}`);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
      // hideLinkError();
      hideRegisterError();
    } else {
      showLogin();
      authState.innerHTML = 'You\'re not logged in.';
    }
  });
};
monitorAuthState();

// Events
btnSignup?.addEventListener('click', createAccount);
btnLogin?.addEventListener('click', loginEmailPassword);
btnLogout?.addEventListener('click', logout);
btnSignupForm?.addEventListener('click', showRegister);
backLogin.addEventListener('click', showLogin);
btnGoogle.addEventListener('click', loginGoogle);
