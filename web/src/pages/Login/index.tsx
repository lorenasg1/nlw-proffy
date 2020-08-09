import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

// import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './syles.css';
import { Link } from 'react-router-dom';
// import { FormControlLabel } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
//   icon: {
//     borderRadius: 5,
//     width: 24,
//     height: 24,
//     boxShadow:
//       'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     backgroundColor: '#f5f8fa',
//     backgroundImage:
//       'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '$root.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#ebf1f5',
//     },
//     'input:disabled ~ &': {
//       boxShadow: 'none',
//       background: 'rgba(206,217,224,.5)',
//     },
//   },
//   checkedIcon: {
//     backgroundColor: '#04d361',
//     backgroundImage:
//       'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&:before': {
//       display: 'block',
//       width: 16,
//       height: 16,
//       backgroundImage:
//         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//       content: '""',
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#04bf58',
//     },
//   },
// });
const Login = () => {
  // const classes = useStyles();
  return (
    <div id="page-login">
      <div id="page-login-content" className="container">
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
                  {/* <div> */}
                  <div className="rememberme">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">Lembrar-me</label>
                  </div>
                  <span>
                    <Link to="/forgot-password">Esqueci minha senha</Link>
                  </span>
                  {/* </div> */}
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
    </div>
  );
};

export default Login;
