import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import TicketsList from './TicketsList'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <article className="search-container">
         <Menu/>
         <TicketsList/>
        </article>
        <Footer/>
      </div>
    </div>
  );
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(App)
