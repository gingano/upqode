import tickets from '../api/tickets'


export const reducer = (state, action) => {
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

      if (action.only) {
        if (action.value === 0) {
          filterBy0 = true
          filterBy1 = false
          filterBy2 = false
          filterBy3 = false
        }
        if (action.value === 1) {
          filterBy0 = false
          filterBy1 = true
          filterBy2 = false
          filterBy3 = false
        }
        if (action.value === 2) {
          filterBy0 = false
          filterBy1 = false
          filterBy2 = true
          filterBy3 = false
        }
        if (action.value === 3) {
          filterBy0 = false
          filterBy1 = false
          filterBy2 = false
          filterBy3 = true
        }

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
        if (filterBy0 === false) {
          filter[0] = undefined
        }
        if (filterBy1 === false) {
          filter[1] = undefined
        }
        if (filterBy2 === false) {
          filter[2] = undefined
        }
        if (filterBy3 === false) {
          filter[3] = undefined
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
          filterBy0 = false
          if(filterBy1 === false && filterBy2 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filterBy0 = true
        }
      }
      if (action.value === 1) {
        if (filter[1] === 1) {
          filterBy1 = false
          if(filterBy0 === false && filterBy2 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filterBy1 = true
        }
      }
      if (action.value === 2) {
        if (filter[2] === 2) {
          filterBy2 = false
          if(filterBy0 === false && filterBy1 === false && filterBy3 === false) {
            filterByAll = true
          }
        } else {
          filterBy2 = true
        }
      }
      if (action.value === 3) {
        if (filter[3] === 3) {
          filterBy3 = false
          if(filterBy0 === false && filterBy1 === false && filterBy2 === false) {
            filterByAll = true
          }
        } else {
          filterBy3 = true
        }
      }

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
      if (filterBy0 === false) {
        filter[0] = undefined
      }
      if (filterBy1 === false) {
        filter[1] = undefined
      }
      if (filterBy2 === false) {
        filter[2] = undefined
      }
      if (filterBy3 === false) {
        filter[3] = undefined
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