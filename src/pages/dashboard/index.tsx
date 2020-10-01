import React, { useEffect, useState, FormEvent } from 'react';
import { Title, Container, List, ModalDelete, Form } from './styles';
import { AiFillEdit, AiFillDelete, AiOutlineArrowLeft } from 'react-icons/ai';
import api from '../../services/api';

// import { Container } from './styles';
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserDTO {
  name?: string;
  email?: string;
  age?: number;
}

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [age, setAge] = useState<number | null>();
  const [modalInputs, setModalInputs] = useState(false);
  const [idUser, setId] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);

  async function handleEditUserForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(`age: ${age} type: ${typeof age} `);
    await api.put(`/users/update/${idUser}`, {
      name,
      email,
      age,
    });

    setModalInputs(false);
  }

  function showModal(id: number) {
    setModal(true);

    setId(id);
  }

  function showInputs() {
    setModalInputs(true);
  }

  function hideModal() {
    setModal(false);
  }

  async function deleteUser(id: number): Promise<void> {
    await api.delete(`/users/delete/${id}`);

    setUsers([...users]);
    setModal(false);
  }

  useEffect(() => {
    api.get('users').then((response) => setUsers(response.data));
  }, [users]);

  return (
    <>
      <Title> Crud </Title>
      <Container>
        <h2>Lista de Usuários</h2>
        <List>
          {users.map((user) => (
            <ul key={user.id}>
              {modalInputs ? (
                <>
                  <Form onSubmit={handleEditUserForm}>
                    <li>
                      <span>Id</span>
                      <p>{user.id}</p>
                    </li>
                    <li>
                      <span>Nome</span>
                      <input
                        type='text'
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        defaultValue={user.name}
                      />
                    </li>
                    <li>
                      <span>Email</span>
                      <input
                        type='text'
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        defaultValue={user.email}
                      />
                    </li>

                    <li>
                      <span>Idade</span>
                      <input
                        type='text'
                        onChange={(e) => {
                          const ageAsNumber = parseInt(e.target.value);
                          setAge(ageAsNumber);
                        }}
                        defaultValue={user.age}
                      />
                    </li>
                    <li>
                      <button className='butao' onClick={() => setId(user.id)}>
                        Enviar
                      </button>
                    </li>
                  </Form>
                </>
              ) : (
                <>
                  <li>
                    <span>Id</span>
                    <p>{user.id}</p>
                  </li>
                  <li>
                    <span>Nome</span>
                    <p>{user.name}</p>
                  </li>
                  <li>
                    <span>Email</span>
                    <p>{user.email}</p>
                  </li>
                  <li>
                    <span>Idade</span>
                    <p>{user.age}</p>
                  </li>
                </>
              )}

              <div>
                <button>
                  <AiFillEdit size={20} onClick={showInputs} />
                </button>
                <button>
                  <AiFillDelete size={20} onClick={() => showModal(user.id)} />
                </button>
              </div>
            </ul>
          ))}
        </List>
        <a href='/'>
          <AiOutlineArrowLeft size={20} />
          Cadastro
        </a>
      </Container>

      {modal && (
        <ModalDelete>
          <div>
            <strong>Tem certeza? </strong>
            <button onClick={() => deleteUser(idUser)}>Sim</button>
            <button onClick={hideModal}>Não</button>
          </div>
        </ModalDelete>
      )}
    </>
  );
};

export default Dashboard;
