import {createStore} from 'redux'
import tickets from './api/tickets'
import loadCurrencies from './api/loadCurrencies'

const onload = async () => {
  const currencies = await loadCurrencies();
  initialState.currencies = currencies
}

const initialState = {
  tickets: tickets.tickets.sort((a, b) => a.price > b.price ? 1 : -1),
  currencyStatus: 'RUB',
  filterByAll: true,
  filterBy0: false,
  filterBy1: false,
  filterBy2: false,
  filterBy3: false,
  filter: [undefined,undefined,undefined,undefined],
  filteredTickets: tickets.tickets.sort((a, b) => a.price > b.price ? 1 : -1),
};

onload()

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeCurrencyStatusToRUB':
      return {
        ...state,
        currencyStatus: 'RUB'
      }
    case 'changeCurrencyStatusToUSD':
      return {
        ...state,
        currencyStatus: 'USD'
      }
    case 'changeCurrencyStatusToEUR':
      return {
        ...state,
        currencyStatus: 'EUR'
      }
    case 'changeFilterToAll':
      return {
        ...state,
        filterByAll: true,
        filterBy0: false,
        filterBy1: false,
        filterBy2: false,
        filterBy3: false,
        filter: [undefined,undefined,undefined,undefined],
        filteredTickets: state.tickets
      }
    case 'changeFilter':
      let filter = state.filter;
      let filterBy0 = state.filterBy0;
      let filterBy1 = state.filterBy1;
      let filterBy2 = state.filterBy2;
      let filterBy3 = state.filterBy3;
      let filterByAll = false;

      if (filterBy0 === true) {
        filter[0] = 0
      }
      if (filterBy1 === true) {
        filter[1] = 1
      }
      if (filterBy2 === true) {
        filter[2] = 2
      }
      if (filterBy3 === true) {
        filter[3] = 3
      }

      if (action.only) {
        if (action.value === 0) {
          filterBy0 = true
          filterBy1 = false
          filterBy2 = false
          filterBy3 = false
          filter = [undefined, undefined, undefined, undefined]
          filter[0] = 0
        }
        if (action.value === 1) {
          filterBy0 = false
          filterBy1 = true
          filterBy2 = false
          filterBy3 = false
          filter = [undefined, undefined, undefined, undefined]
          filter[1] = 1
        }
        if (action.value === 2) {
          filterBy0 = false
          filterBy1 = false
          filterBy2 = true
          filterBy3 = false
          filter = [undefined, undefined, undefined, undefined]
          filter[2] = 2
        }
        if (action.value === 3) {
          filterBy0 = false
          filterBy1 = false
          filterBy2 = false
          filterBy3 = true
          filter = [undefined, undefined, undefined, undefined]
          filter[3] = 3
        }
        let filteredTickets = state.filteredTickets;

        filteredTickets = tickets.tickets.filter((ticket) => (
            filter[0] === ticket.stops ||
            filter[1] === ticket.stops ||
            filter[2] === ticket.stops ||
            filter[3] === ticket.stops))

        return {
          ...state,
          filterBy0,
          filterBy1,
          filterBy2,
          filterBy3,
          filterByAll,
          filteredTickets
        }
      }

      if (action.value === 0) {
        if (filter[0] === 0) {
          filter[0] = undefined
          filterBy0 = false
          if(filterBy1 === false && filterBy2 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filter[0] = 0
          filterBy0 = true
        }
      }
      if (action.value === 1) {
        if (filter[1] === 1) {
          filter[1] = undefined
          filterBy1 = false
          if(filterBy0 === false && filterBy2 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filter[1] = 1
          filterBy1 = true
        }
      }
      if (action.value === 2) {
        if (filter[2] === 2) {
          filter[2] = undefined
          filterBy2 = false
          if(filterBy0 === false && filterBy1 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filter[2] = 2
          filterBy2 = true
        }
      }
      if (action.value === 3) {
        if (filter[3] === 3) {
          filter[3] = undefined
          filterBy3 = false
          if(filterBy0 === false && filterBy1 === false && filterBy2 === false) {
            filterByAll = true
          }
        } else {
          filter[3] = 3
          filterBy3 = true
        }
      }

      let filteredTickets = state.filteredTickets;

      filteredTickets = tickets.tickets.filter((ticket) => (
            filter[0] === ticket.stops ||
            filter[1] === ticket.stops ||
            filter[2] === ticket.stops ||
            filter[3] === ticket.stops ||
            filterByAll))

      return {
        ...state,
        filter,
        filterBy0,
        filterBy1,
        filterBy2,
        filterBy3,
        filterByAll,
        filteredTickets
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

export default store