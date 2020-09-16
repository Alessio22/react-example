import React from 'react';
import './App.css';
import FetchDataOne from './components/FetchDataOne';
import FetchDataTwo from './components/FetchDataTwo';
import UseContext from './components/UseContext';
import UseContextTwo from './components/UseContextTwo';
import UseEffect from './components/UseEffect';
import UseEffectFive from './components/UseEffectFive';
import UseEffectFour from './components/UseEffectFour';
import UseEffectThree from './components/UseEffectThree';
import UseEffectTwo from './components/UseEffectTwo';
import UseCallback from './components/UseCallback';
import UseReduceOne from './components/UseReduceOne';
import UseReducerTwo from './components/UseReducerTwo';
import UseReduceThree from './components/UseReduceThree';
import UseState from './components/UseState';
import UseStateArray from './components/UseStateArray';
import UseStateObj from './components/UseStateObj';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseRefTwo from './components/UseRefTwo';

export const UserContext = React.createContext()

export const UserTwoContext = React.createContext()
export const ChannelTwoContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectTwo /> */}
      {/* <UseEffectThree /> */}
      {/* <UseEffectFour /> */}
      {/* <UseEffectFive /> */}
      {/* <FetchDataOne /> */}
      {/* <FetchDataTwo /> */}
      {/* <UserContext.Provider value={"Alessio"}>
          <UseContext />
      </UserContext.Provider> */}
      <UserTwoContext.Provider value={"Alessio"}>
        <ChannelTwoContext.Provider value={"Channel name"}>
          <UseContextTwo />
        </ChannelTwoContext.Provider>
      </UserTwoContext.Provider>
      {/* <UseReduceOne /> */}
      {/* <UseReducerTwo /> */}
      {/* <UseReduceThree /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseRefTwo /> */}
    </div>
  );
}

export default App;
