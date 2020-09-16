import React, { Component } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import ComponentD from './components/ComponentD'
import UserContext from './components/userContext'

export class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <UserContext.Provider value={"Alessio"}>
          <ComponentA />
          <ComponentB />
          <ComponentC />

          <ComponentD />
        </UserContext.Provider>
        <ComponentD />
      </div>
    )
  }
}

// // default value
// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>App</p>
//           <ComponentA />
//           <ComponentB />
//           <ComponentC />
//       </div>
//     )
//   }
// }

export default App