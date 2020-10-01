import React, { FormEvent, useState } from 'react';
import { Title, Container, Form } from './styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import api from '../../services/api';

// import { Container } from './styles';

interface User {
  name: string;
  email: string;
  age: number;
}

const MainPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState<User | null>(null);
  async function handleFormSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const ageNumber = parseInt(age);
    await api
      .post('/users', {
        name,
        email,
        age: ageNumber,
      })
      .then((response) => setUser(response.data));

    setName('');
    setEmail('');
    setAge('');
  }

  return (
    <>
      <Title> Crud </Title>
      <Container>
        <h2>Cadastro Usuário</h2>
        <Form onSubmit={handleFormSubmit}>
          <span>Nome</span>
          <input
            type='text'
            placeholder='Digite o nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Email</span>
          <input
            type='text'
            placeholder='Digite o email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Idade</span>
          <input
            type='text'
            placeholder='Digite a idade'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
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

export default MainPage;
