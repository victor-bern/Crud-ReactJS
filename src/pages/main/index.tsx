import React, { FormEvent } from 'react';
import { Title, Container, Form } from './styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

// import { Container } from './styles';

const main: React.FC = () => {
  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }
  return (
    <>
      <Title> Crud </Title>
      <Container>
        <h2>Cadastro Usuário</h2>
        <Form onSubmit={handleFormSubmit}>
          <span>Nome</span>
          <input type='text' placeholder='Digite o nome' />
          <span>Email</span>
          <input type='text' placeholder='Digite o email' />
          <span>Idade</span>
          <input type='text' placeholder='Digite a idade' />
          <button>Enviar Dados</button>
        </Form>
        <a href='/dashboard'>
          Dashboard
          <AiOutlineArrowRight size={20} />
        </a>
      </Container>
    </>
  );
};

export default main;
