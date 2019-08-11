import React from 'react'
import { connect } from 'react-redux'

function Menu({
                changeCurrencyToRUB,
                changeCurrencyToUSD,
                changeCurrencyToEUR,
                changeFilterToAll,
                changeFilterTo0,
                changeFilterTo1,
                changeFilterTo2,
                changeFilterTo3,
                changeFilterOnlyTo0,
                changeFilterOnlyTo1,
                changeFilterOnlyTo2,
                changeFilterOnlyTo3,
                currencyStatus,
                filterByAll,
                filterBy0,
                filterBy1,
                filterBy2,
                filterBy3}) {
  return (
    <div className="menu">
      <div className="currency-selection">
        <p>Валюта</p>
        <div className="buttons">
          <button className={currencyStatus === 'RUB' ? 'selected' : null} onClick={changeCurrencyToRUB}>RUB</button>
          <button className={currencyStatus === 'USD' ? 'selected' : null} onClick={changeCurrencyToUSD}>USD</button>
          <button className={currencyStatus === 'EUR' ? 'selected' : null} onClick={changeCurrencyToEUR}>EUR</button>
        </div>
      </div>
      <div className="filter">
        <p>Количество пересадок</p>
        <form className="checkboxes">
          <div>
            <input name="all" id="all" type="checkbox" checked={filterByAll} onChange={changeFilterToAll}/>
            <label htmlFor="all">
              Все
            </label>
          </div>
          <div>
            <input name="without-stops" id="without-stops" type="checkbox" checked={filterBy0} onChange={changeFilterTo0}/>
            <label htmlFor="without-stops">
              Без пересадок
            </label>
            <a className="only" onClick={changeFilterOnlyTo0}>только</a>
          </div>
          <div>
            <input name="1-stop" id="1-stop" type="checkbox" checked={filterBy1} onChange={changeFilterTo1}/>
            <label htmlFor="1-stop">
              1 пересадка
            </label>
            <a className="only" onClick={changeFilterOnlyTo1}>только</a>
          </div>
          <div>
            <input name="2-stops" id="2-stop" type="checkbox" checked={filterBy2} onChange={changeFilterTo2}/>
            <label htmlFor="2-stop">
              2 пересадки
            </label>
            <a className="only" onClick={changeFilterOnlyTo2}>только</a>
          </div>
          <div>
            <input name="3-stops" id="3-stop" type="checkbox" checked={filterBy3} onChange={changeFilterTo3}/>
            <label htmlFor="3-stop">
              3 пересадки
            </label>
            <a className="only" onClick={changeFilterOnlyTo3}>только</a>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapState = (state) => ({
  currencyStatus: state.currencyStatus,
  filter: state.filter,
  filterByAll: state.filterByAll,
  filterBy0: state.filterBy0,
  filterBy1: state.filterBy1,
  filterBy2: state.filterBy2,
  filterBy3: state.filterBy3,
});

const mapDispatch = (dispatch) => ({
  changeCurrencyToRUB: () => dispatch({type: 'changeCurrencyStatusToRUB'}),
  changeCurrencyToUSD: () => dispatch({type: 'changeCurrencyStatusToUSD'}),
  changeCurrencyToEUR: () => dispatch({type: 'changeCurrencyStatusToEUR'}),
  changeFilterToAll: () => dispatch({type: 'changeFilterToAll'}),
  changeFilterTo0: () => dispatch({type: 'changeFilter', value: 0}),
  changeFilterTo1: () => dispatch({type: 'changeFilter', value: 1}),
  changeFilterTo2: () => dispatch({type: 'changeFilter', value: 2}),
  changeFilterTo3: () => dispatch({type: 'changeFilter', value: 3}),
  changeFilterOnlyTo0: () => dispatch({type: 'changeFilter', value: 0, only: true}),
  changeFilterOnlyTo1: () => dispatch({type: 'changeFilter', value: 1, only: true}),
  changeFilterOnlyTo2: () => dispatch({type: 'changeFilter', value: 2, only: true}),
  changeFilterOnlyTo3: () => dispatch({type: 'changeFilter', value: 3, only: true}),
});

export default connect(mapState, mapDispatch)(Menu)