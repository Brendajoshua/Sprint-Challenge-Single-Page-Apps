import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import Menu from './components/Menu'


export default function App() {
  return (
    <main>
      <Header />
      <Menu />
      <Route path="/" component={WelcomePage} exact/>
      <Route path="/character" component={CharacterList}/>
      <Route path="/search" component={SearchForm}/>
    </main>
  );
}
