import React, { Component } from 'react';

class SummaryTitle extends Component {
    
    render() {
        return (
            <div className="weather-widget__results-title col-lg-12">
                <div className="weather-widget__results-city">
                    <h2> Weather in London as follows: </h2>
                </div>
                <div className="weather-widget__results-today"></div>
            </div>
        )
    }

}

export default SummaryTitle;