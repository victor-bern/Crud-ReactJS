import styled from 'styled-components';

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
    left: 110px;
    top: 135px;
    margin-right: 5px;
    text-decoration: none;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(-5px);
    }
  }
`;

export const List = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-radius: 4px;

  ul {
    background: #cdd5d9;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    list-style: none;

    display: flex;
    align-items: center;

    li {
      padding: 10px;
      margin-left: 20px;
      cursor: pointer;

      span {
        color: #858687;
        margin-bottom: 5px;
        display: block;
        cursor: pointer;
      }

      p {
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        display: inline;
      }
      button {
        border: none;
        padding: 5px;
        background: #cdd5d9;
        border-radius: 3px;
      }

      button.button {
        border: 1px solid black;
        cursor: pointer;

        &:hover {
          background: pink;
        }
      }
    }

    & + ul {
      margin-top: 16px;
    }

    div {
      width: 100px;
      margin-left: 150px;
      flex: 1;
      position: absolute;

      button {
        position: relative;
        left: 800px;
        border: none;
        padding: 5px;
        background: #cdd5d9;
        border-radius: 3px;
        transition: background 0.2s;

        & + button {
          margin-left: 20px;
        }
        & + button:hover {
          background: red;
        }

        &:hover {
          background: green;
        }
      }
    }
  }
`;

export const ModalDelete = styled.div`
  position: absolute;
  top: 300px;
  width: 200px;
  height: 100px;
  background: grey;
  left: 600px;

  div {
    strong {
      display: block;
      text-align: center;
      padding: 30px;
    }

    button {
      padding: 10px;
      width: 50%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 150px;
    height: 30px;
    padding: 0 10px;
  }

  button.butao {
    margin-top: 12px;
    border: 1px solid black;
    transition: background 0.2s;

    &:hover {
      background: green;
    }
  }
`;
