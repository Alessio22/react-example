import React, { Component } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

import UserContext from './userContext'

export class App extends Component {

  render() {
    return (
      <div>
        <p>App</p>
        <UserContext.Provider value={"Alessio"}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App