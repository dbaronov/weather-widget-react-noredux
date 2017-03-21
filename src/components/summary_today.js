import React, { Component } from 'react';

class SummaryToday extends Component {
    
    render() {
        return (
            <div className="weather-widget__results">
                <div className="weather-widget__results-stats">
                    <p className="weather-widget__results-stats__descr col-lg-12">Summary : {this.props.summary}</p>
                    <p className="weather-widget__results-stats__temp col-lg-6">Temp : {this.props.temp}</p>
                    <p className="weather-widget__results-stats__pressure col-lg-6">Pressure : {this.props.pressure}mm</p>
                    <p className="weather-widget__results-stats__humidity col-lg-6">Humidity : {this.props.humidity}%</p>
                    <p className="weather-widget__results-stats__wind-speed col-lg-6">Wind : {this.props.wind}mph</p>
                </div>
            </div>
        )
    }

}

export default SummaryToday;