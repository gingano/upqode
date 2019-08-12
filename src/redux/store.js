import {createStore} from 'redux'
import tickets from '../api/tickets'
import loadCurrencies from '../api/loadCurrencies'
import { reducer } from './reducer'

const onload = async () => {
  const currencies = await loadCurrencies();
  initialState.currencies = currencies
}

onload()

const initialState = {
  tickets: tickets.tickets.sort((a, b) => a.price > b.price ? 1 : -1),
  currencyStatus: 'RUB',
  filterByAll: true,
  filterBy0: false,
  filterBy1: false,
  filterBy2: false,
  filterBy3: false,
  filter: [,,,],
  filteredTickets: tickets.tickets.sort((a, b) => a.price > b.price ? 1 : -1),
};

const store = createStore(reducer, initialState)

export default store