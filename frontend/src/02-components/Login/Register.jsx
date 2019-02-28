import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Register = props => {
  return (
    <LoginPageStyles>
      <LoginMenuStyles autoComplete="false" onSubmit={props.registerUser}>
        <TextField
          minLength="4"
          maxLength="24"
          fullWidth
          label="Full Name"
          onChange={props.handleChange}
          name="fullname"
          type="text"
          value={props.currentName}
          inputProps={{ minLength: 4, maxLength: 30 }}
          required
        />
        <TextField
          minLength="6"
          maxLength="24"
          fullWidth
          label="Email"
          onChange={props.handleChange}
          name="email"
          value={props.currentUsername}
          inputProps={{ minLength: 4, maxLength: 30 }}
          required
        />
        <TextField
          minLength="6"
          maxLength="24"
          fullWidth
          label="Username"
          onChange={props.handleChange}
          name="username"
          value={props.currentUsername}
          inputProps={{ minLength: 4, maxLength: 30 }}
          required
        />
        <TextField
          minLength="4"
          maxLength="24"
          fullWidth
          label="Password"
          onChange={props.handleChange}
          name="password"
          value={props.currentPassword}
          inputProps={{ minLength: 6, maxLength: 30 }}
          required
          type="password"
        />

        <LoginButton type="submit">
          {props.isLoading ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            'Create Account'
          )}
        </LoginButton>
        <LoginPageText>
          By signing up, you agree to our Terms, Data Policy.
        </LoginPageText>
      </LoginMenuStyles>
      <SwitchMenuStyles>
        <div>
          <Link to="/login">
            <p>Go Back</p>
          </Link>
        </div>
      </SwitchMenuStyles>
    </LoginPageStyles>
  );
};

export default Register;

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
  padding: 40px 40px 0 40px;

  label {
    font-size: 1.3rem;
  }
`;

const LoginButton = styled.button`
  width: 272px;
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
  margin-top: 15px;
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
  margin: 15px 0;
  padding: 0 10px;
  text-align: center;
  line-height: 1.5;
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

  div {
    cursor: pointer;
    width: 60%;
    justify-content: center;
    align-items: center;
    display: flex;

    p {
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
    }
  }
`;
