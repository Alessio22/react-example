import React, {useReducer } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import MenuComponent from './components/MenuComponent';
import PrivateRoute from './components/PrivateRoute';
import PostsPage from './pages/posts/PostsPage';
import { userReducer, userInitialState } from './components/userReducer'

import './App.css'

export const UserContext = React.createContext()

function App() {
  const [user, userDispatch] = useReducer(userReducer, userInitialState)

  return (
    <UserContext.Provider value={{user, userDispatch}}>
      <BrowserRouter>
        <MenuComponent />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/posts">
            <PostsPage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
