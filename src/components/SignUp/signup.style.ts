import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;

  h2 {
    margin: 0;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  label {
    font-weight: 600;
  }

  input {
    padding: 5px;
  }
`;

export const SignUpButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;