import React from 'react';
import './styles/App.css';
import TicketsList from './components/TicketsList'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <article className="search-container">
         <Menu/>
         <TicketsList/>
        </article>
      </div>
    </div>
  );
}

export default App
