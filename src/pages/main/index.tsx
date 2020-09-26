import React from 'react';
import { Title, Container, Form } from './styles';

// import { Container } from './styles';

const main: React.FC = () => {
  return (
    <>
      <Title> Crud </Title>
      <Container>
        <h2>Dados Usuário</h2>
        <Form>
          <span>Nome</span>
          <input type='text' placeholder='Digite o nome' />
          <span>Email</span>
          <input type='text' placeholder='Digite o email' />
          <span>Idade</span>
          <input type='text' placeholder='Digite a idade' />
          <button>Enviar Dados</button>
        </Form>
      </Container>
    </>
  );
};

export default main;
