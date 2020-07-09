import React from 'react';
import ApiContextProvider from './src/contexts/ApiContext';
import MainScreen from './src/Screens/MainScreen';



const App = () => {
  return (
    <ApiContextProvider>
      <MainScreen />
    </ApiContextProvider>

  );
};

export default App;
