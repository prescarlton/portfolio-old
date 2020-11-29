import React from 'react';
import NavBar from './components/molecules/NavBar';
import AppRouter from './router/appRouter';

const App = () => {
  return (
    <div className="app">
      <AppRouter/>
    </div>
  );
}

export default App;