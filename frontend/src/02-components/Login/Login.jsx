import React from 'react';
import styled from 'styled-components';

const Login = props => {
  return (
    <LoginPageStyles>
      <form onSubmit={props.handleLogin}>
        <input
          autoComplete="username"
          placeholder="Username"
          onChange={props.handleChange}
          name="username"
          value={props.username}
          required
          minLength="4"
          maxLength="24"
        />
        <input
          autoComplete="current-password"
          placeholder="Password"
          onChange={props.handleChange}
          name="password"
          value={props.password}
          required
          minLength="6"
          type="password"
          maxLength="24"
        />
        <button>Login</button>
      </form>
    </LoginPageStyles>
  );
};

export default Login;

const LoginPageStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    width: 340px;
    background: #ffffff;
    padding: 50px 10px 20px 10px;

    input {
      border: 1px solid #efefef;
      border-radius: 3px;
      margin-bottom: 7px;
      padding: 10px 0 10px 7px;
      width: 270px;
      background: #fafafa;

      &:focus {
        outline: none;
      }
    }
    button {
      width: 278px;
      height: 40px;
      border-radius: 4px;
      padding: 0 10px;
      margin: 10px 0;
      color: white;
      font-weight: 700;
      font-size: 14px;
      background: #4e6d79;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
