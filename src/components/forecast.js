import React from 'react';
import ForecastItem from './forecast-item';

const Forecast = (props) => {

    const forecastItems = props.days.map( (day) => {
        return (
            <ForecastItem day={day} key={day.date_epoch} />
        )
    });

    return (
        <li className="weather-widget__forecast-stats__item col-lg-12">
            {forecastItems}
        </li>
    )
}

export default Forecast;