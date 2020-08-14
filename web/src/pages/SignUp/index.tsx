import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import showEyeIcon from '../../assets/images/icons/show-eye.svg';
import hideEyeIcon from '../../assets/images/icons/hide-eye.svg';
import backIcon from '../../assets/images/icons/back.svg';

// import useAuth from '../../contexts/useAuth';

import './styles.css';

const SignUp = () => {
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
    <div id="page-signup">
      <Link className="back" to="/Home">
        <img src={backIcon} alt="voltar" />
      </Link>
      <div className="logo-container">
        <img src={logoImg} alt="Proffy" />
        <h2>
          Sua plataforma de <br /> estudos online.
        </h2>
      </div>
      <div className="form-container">
        <div>
          <fieldset>
            <legend>Cadastro</legend>

            <p>Prencha os dados abaixo para começar.</p>

            <form>
              <div className="signup-input-block border-top">
                <label htmlFor="Nome">Nome</label>
                <input type="text" name="nome" id="nome" />
              </div>
              <div className="signup-input-block border-top">
                <label htmlFor="email">Sobrenome</label>
                <input type="text" name="sobrenome" id="sobrenome" />
              </div>
              <div className="signup-input-block border-top">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="signup-input-block border-bottom">
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

              <button>Concluir cadastro</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
