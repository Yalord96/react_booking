import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Text from '../../components/Text/Text';
import Filter from "../../components/Filter/Filter";
import Hotels from "../../components/Hotels/Hotels";
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Text />
      <Filter />
      <Hotels />
    </div>
  );
}

export default App;
