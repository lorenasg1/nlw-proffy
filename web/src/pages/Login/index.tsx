import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import showEyeIcon from '../../assets/images/icons/show-eye.svg';
import hideEyeIcon from '../../assets/images/icons/hide-eye.svg';

// import useAuth from '../../contexts/useAuth';

import './styles.css';

const Login = () => {
  // const { signed, singIn, handleToggleRemember } = useAuth();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    const passwordInput = document.querySelector('#password');

    if (isPasswordVisible) {
      passwordInput?.setAttribute('type', 'password');
    } else {
      passwordInput?.setAttribute('type', 'text');
    }

    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div id="page-login">
      <div className="logo-container">
        <img src={logoImg} alt="Proffy" />
        <h2>
          Sua plataforma de <br /> estudos online.
        </h2>
      </div>
      <div className="form-container">
        <div>
          <fieldset>
            <legend>Fazer login</legend>

            <form>
              <div className="login-input-block border-top">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="login-input-block border-bottom">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
                <span
                  aria-hidden="true"
                  onClick={handlePasswordToggle}
                  className="password-toggle">
                  {isPasswordVisible ? (
                    <img src={hideEyeIcon} alt="Mostrar/esconder senha" />
                  ) : (
                    <img src={showEyeIcon} alt="Mostrar/esconder senha" />
                  )}
                </span>
              </div>

              <div className="form-options">
                <div className="rememberme">
                  <input
                    // onChange={handleToggleRemember}
                    id="remember"
                    type="checkbox"
                  />
                  <label htmlFor="remember">Lembrar-me</label>
                </div>
                <span>
                  <Link to="/forgot-password">Esqueci minha senha</Link>
                </span>
              </div>

              <button className="">Entrar</button>
            </form>
          </fieldset>

          <footer>
            <div>
              <p>Não tem conta?</p>
              <p>
                <Link to="/cadastro">Cadastre-se</Link>
              </p>
            </div>
            <span>
              É de graça {'  '}
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
