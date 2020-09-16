import React from 'react';
import './App.css';
import ParentTwo from './components/ParentTwo'
import Form from './components/Form'

function App() {
  const nome = "alessio"
  const myStyle = {
    color: "red",
    backgroundColor:""
  }

  return (
    <div className="App" style={myStyle}>
      {/* <ParentTwo name={nome} /> */}
      <Form />
    </div>
  );
}

export default App;
