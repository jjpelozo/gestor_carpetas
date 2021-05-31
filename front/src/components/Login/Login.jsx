import React, { useState } from "react";
import logo from "../../archivos/logo.jpg";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postLogin } from "../../state/reducers/login";
import "./Login.css";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   return  dispatch(
      postLogin({
        email: login.email,
        password: login.password,
      })
    ).then((res) => {
      console.log(res);
      if (!res.error) {
     
        history.push("/carpetas");
      } else {
        alert(`Usuario o password incorrecto`);
      }
    })
    ;
  };

  return (
    <div className="login">
      <div className="login__containner">
        <img src={logo} alt="" />
        <form className="login__form" onSubmit={handleSubmit}>
          <span className="">Iniciar Sesion</span>
          <div className="login__form__input">
            <input
              placeholder="Usuario"
              type="email"
              name="email"
              onChange={handleLogin}
              value={login.email}
              required
            />
            <label></label>

            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              onChange={handleLogin}
              value={login.password}
              required
            />
          </div>
          <button className="login__form__button">Iniciar Sesion</button>
          <br />
          <br />
        
        </form>
      </div>
    </div>
  );
}

export default Login;
