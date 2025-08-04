import './config.js';
import './lib/auth.js';
import './lib/api.js';

document.getElementById('root').innerHTML = `
  <div class="auth-container">
    <h1>Welcome to Hulu-auth</h1>
    <div id="auth-ui"></div>
  </div>
`;

const authUI = document.getElementById('auth-ui');
authUI.innerHTML = '<signin-form></signin-form>';
