import styled from 'styled-components';
import { shade } from 'polished';
export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 90%;
  height: 500px;
  margin: 0 auto;
  background: white;
  display: block;
  border-radius: 3px;

  h2 {
    box-sizing: border-box;
    font-size: 30px;
    padding-top: 50px;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 110px;
    margin-right: 5px;
    text-decoration: none;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

export const Form = styled.form`
  max-width: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 30px;

  span {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    display: block;
    margin-bottom: 5px;
    width: 90%;
    height: 45px;
    padding: 5px 10px;
  }

  button {
    border: none;
    padding: 20px;
    border-radius: 5px;
    background: #7b858a;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#7b858a')};
    }
  }
`;
