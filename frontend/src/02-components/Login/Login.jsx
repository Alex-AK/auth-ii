import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Login = props => {
  return (
    <LoginPageStyles>
      <LoginMenuStyles onSubmit={props.loginUser}>
        <LoginInputStyles
          placeholder="Username"
          onChange={props.handleChange}
          name="username"
          value={props.username}
          required
          minLength="4"
          maxLength="24"
        />
        <LoginInputStyles
          placeholder="Password"
          onChange={props.handleChange}
          name="password"
          value={props.password}
          required
          minLength="6"
          type="password"
          maxLength="24"
        />
        <LoginButton
          onClick={props.error === 'fail' ? props.displayError : null}
        >
          {props.isLoading ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            'Login'
          )}
        </LoginButton>
        <br />

        <LoginPageText>Forgot your password?</LoginPageText>
      </LoginMenuStyles>
      <SwitchMenuStyles>
        <Link to="/register">
          <CreateAccount onClick={props.switchView}>
            Create Account
          </CreateAccount>
        </Link>
      </SwitchMenuStyles>
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
`;

const LoginMenuStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  width: 340px;
  background: #ffffff;
  padding: 60px 40px 20px 40px;
`;

const LoginInputStyles = styled.input`
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-bottom: 7px;
  padding: 10px 0 10px 7px;
  width: 270px;
  background: #fafafa;

  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 272px;
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
`;

const LoginPageText = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #9a9a9a;
  margin: 10px 0;
  padding: 0 10px;
  text-align: center;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
  }
`;

const SwitchMenuStyles = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  width: 340px;
  background: #ffffff;
  padding: 20px 0;
  margin-top: 15px;
`;

const CreateAccount = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
