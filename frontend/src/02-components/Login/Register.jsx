import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Register = props => {
  return (
    <RegisterPageStyles>
      <form onSubmit={props.handleRegister}>
        <input
          placeholder="Username"
          onChange={props.handleChange}
          name="username"
          value={props.username}
          required
          minLength="4"
          maxLength="24"
        />
        <input
          placeholder="Password"
          onChange={props.handleChange}
          name="password"
          value={props.password}
          required
          minLength="6"
          type="password"
          maxLength="24"
        />
        <button onClick={props.error === 'fail' ? props.displayError : null}>
          {props.isLoading ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            'Register'
          )}
        </button>
        <br />
      </form>
    </RegisterPageStyles>
  );
};

export default Register;

const RegisterPageStyles = styled.div`
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
