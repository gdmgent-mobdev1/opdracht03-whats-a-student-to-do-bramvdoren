import Component from '../lib/Component';

class LoginComponent extends Component {
  constructor() {
    super({
      name: 'Login',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const loginDiv = document.createElement('div');
    loginDiv.innerHTML = `
    <div class="login">
      <h3>Log hier in.</h3>
      <form class="login__form">
        <label for="loginEmail">Email</label>
        <input type="email" name="email" id="loginEmail"/>
        <div id="errorEmail" class="errorlabel">Error message</div>
        <label for="loginPassword">Password</label>
        <input type="password" name="password" id="loginPassword" />
        <div id="errorPassword" class="errorlabel">Error message</div>
        <div id="divLoginError" class="groep">
          <div id="errorMessage" class="errorlabel">Error message</div>
        </div>
        <button id="btnLogin" type="button">Log in</button>
        <div id="loginGoogle">
          <button id="btnGoogle" type="button">Log in met Google</button>
        </div>
      </form>
      <p>Nog geen account?</p>
      <p class="login-to-register">Registreer hier.</p>
    </div>
    `;
    return loginDiv;
  }
}

export default LoginComponent;
