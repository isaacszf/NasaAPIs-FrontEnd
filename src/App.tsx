import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
};

export default App;
