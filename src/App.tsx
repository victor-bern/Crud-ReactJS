import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobaStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobaStyles />
    </>
  );
};

export default App;
