import React from 'react'
import { connect } from 'react-redux'

function Ticket({ticket, currencyStatus, currencies}) {
  const getDayOrder = (date) => {
    let day = date.split('.')[0];
    let month = date.split('.')[1];
    let year = date.split('.')[2];
    let monthCode;
    switch (month) {
      case '01':
        monthCode = 1;
        break;
      case '02':
        monthCode = 2;
        break;
      case '03':
        monthCode = 4;
        break;
      case '04':
        monthCode = 0;
        break;
      case '05':
        monthCode = 2;
        break;
      case '06':
        monthCode = 5;
        break;
      case '07':
        monthCode = 0;
        break;
      case '08':
        monthCode = 3;
        break;
      case '09':
        monthCode = 6;
        break;
      case '10':
        monthCode = 1;
        break;
      case '11':
        monthCode = 4;
        break;
      case '12':
        monthCode = 6;
        break;
    }
    let yearCode = (6 + +year + (Math.floor(+year/4)))%7

    return (+day + +monthCode + yearCode) % 7
  }

  const getDateString = (date) => {
    let day = date.split('.')[0];
    let month = date.split('.')[1];
    let year = date.split('.')[2];

    let monthString;

    switch (month) {
      case '01':
        monthString = 'янв';
        break;
      case '02':
        monthString = 'фев'
        break;
      case '03':
        monthString = 'мар';
        break;
      case '04':
        monthString = 'апр';
        break;
      case '05':
        monthString = 'май';
        break;
      case '06':
        monthString = 'июн';
        break;
      case '07':
        monthString = 'июл';
        break;
      case '08':
        monthString = 'авг';
        break;
      case '09':
        monthString = 'сен';
        break;
      case '10':
        monthString = 'окт';
        break;
      case '11':
        monthString = 'ной';
        break;
      case '12':
        monthString = 'дек';
        break;
    }
    let dayOrder = getDayOrder(date);
    let dayName;

    switch (dayOrder) {
      case 0:
        dayName = 'Сб';
        break;
      case 1:
        dayName = 'Вс'
        break;
      case 2:
        dayName = 'Пн';
        break;
      case 3:
        dayName = 'Вт';
        break;
      case 4:
        dayName = 'Ср';
        break;
      case 5:
        dayName = 'Чт';
        break;
      case 6:
        dayName = 'Пт';
        break;
    }

    return day + ' ' + monthString + ' 20' + year + ', ' + dayName
  }

  const getPrice = () => {
    if (currencyStatus === 'RUB') {
      return ticket.price + '₽'
    }
    if (currencyStatus === 'USD') {
      let USD = Math.round(ticket.price / currencies.rates.RUB * currencies.rates.USD)
      return USD + '$'
    }
    if (currencyStatus === 'EUR') {
      let EUR = Math.round(ticket.price / currencies.rates.RUB)
      return EUR + '€'
    }
  }

  return (
    <div className="ticket">
      <div className="left-container">
        <div className='logo'>
          <img src={require('./img/Turkish-Airlines-Logo.png')} alt="" width="120px" height="35xp"/>
        </div>
        <button>Купить за {getPrice()}</button>
      </div>
      <div className="vertical-line"/>
      <div className="right-container">
        <div className="from">
          <p className="time">{ticket.departure_time}</p>
          <p className="city">{ticket.origin}, {ticket.origin_name}</p>
          <p className="date">{getDateString(ticket.departure_date)}</p>
        </div>
        <div className="flight">
          <p>
            {
              ticket.stops === 0 ? '' :
                ticket.stops === 1 ? ticket.stops + ' пересадка' :
                  ticket.stops + ' пересадки'
            }
          </p>
          <div className="horizontal-line"/>
          <img src={require('./img/airplane.svg')} alt=""/>
        </div>
        <div className="to">
          <p className="time">{ticket.arrival_time}</p>
          <p className="city">{ticket.destination}, {ticket.destination_name}</p>
          <p className="date">{getDateString(ticket.arrival_date)}</p>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  currencyStatus: state.currencyStatus,
  currencies: state.currencies
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Ticket)
