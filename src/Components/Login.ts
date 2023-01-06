// import Component from '../lib/Component';
// import Elements from '../lib/Elements';

// class LoginComponent extends Component {
//   constructor() {
//     super({
//       name: 'Login',
//       model: {},
//     });
//   }

//   // eslint-disable-next-line class-methods-use-this
//   render() {
//     const loginContainer = document.createElement('div');
//     loginContainer.classList.add('login');
//     const loginForm = document.createElement('div');
//     loginForm.classList.add('login__form');
//     loginForm.innerHTML = `
//       <form class="signup">
//         <label for="signupEmail">email</label>
//         <input type="email" name="email" id="signupEmail" />
//         <label for="signupPassword">password</label>
//         <input type="password" name="password" id="signupPassword" />
//         <button id="btnSignup" type="button">Registreer</button>
//       </form>
//     `;
//     loginContainer.appendChild(
//       Elements.createHeader({
//         textContent: 'Welkom bij uw ToDo app!',
//       }),
//     );
//     loginContainer.appendChild(
//       loginForm,
//     );

//     return loginContainer;
//   }
// }

// export default LoginComponent;
