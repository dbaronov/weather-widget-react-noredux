import React from 'react';

const ForecastItem = (props) => {

    let date = props.day.date;
    let summary = props.day.day.condition.text;
    let tempMin = props.day.day.mintemp_c;
    let tempMax = props.day.day.maxtemp_c;
    let humidity = props.day.day.avghumidity;
    let wind = props.day.day.maxwind_mph;

    return (
        <ul>
            <li className="col-lg-2">{ date }</li>
            <li className="col-lg-4">{ summary }</li>
            <li className="col-lg-2">{ tempMin }&#8451; / { tempMax }&#8451;</li>
            <li className="col-lg-2">{ humidity }%</li>
            <li className="col-lg-2">{ wind }mph</li>
        </ul>
    )
}

export default ForecastItem;