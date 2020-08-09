import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
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
              {/* <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Senha" type="password" /> */}

              <div className="login-input-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="login-input-block">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className="form-options">
                <div className="rememberme">
                  <input id="remember" type="checkbox" />
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
