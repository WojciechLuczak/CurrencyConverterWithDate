import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: rgba(242, 242, 242, 0.8);
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const FormElement = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const FormSelect = styled.select`
  ${FormInput} /* Reuse styles from FormInput */
`;

export const Result = styled.div`
  text-align: center;
  font-weight: bold;
  color: #333;
  font-size: 16px;
  margin-top: 20px;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;