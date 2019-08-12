import React from 'react';
import '../styles/TicketsList.css'
import {connect} from 'react-redux'
import Ticket from './Ticket'

function TicketsList({filteredTickets, filter}) {
  return (
    <div className="ticketsList">
      <ul>
        {filteredTickets.map(ticket => <li key={Math.random()}><Ticket ticket={ticket}/></li>)}
      </ul>
    </div>
  );
}

const mapState = (state) => ({
  filteredTickets: state.filteredTickets,
  filter: state.filter
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(TicketsList)