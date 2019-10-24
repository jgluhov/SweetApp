import React from 'react';
import './App.css';
import SweetList from './components/SweetList';
import SweetDisplay from './components/SweetDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <SweetList />
      <SweetDisplay />
      <SweetList />
    </div>
  );
}

export default App;
