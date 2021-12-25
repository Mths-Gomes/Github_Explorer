import React from 'react';

import GlobalStyle from './styles/global';
// import AppProvider from './hooks';
import Routers from './routes';

const App: React.FC = () => (
  <>
    <Routers />
    <GlobalStyle />
  </>
);

export default App;
