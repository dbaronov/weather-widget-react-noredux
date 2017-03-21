import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './components/header';
import NotificationBar from './components/notification_bar';
import SearchBar from './components/search_bar';
import SummaryTitle from './components/summary_title';
import SummaryToday from './components/summary_today';
import Forecast from './components/forecast';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data: null,
            weKnow: null,
            forecastFor: 3,
            city: null,
            country: null,
            summary: null,
            temp: null,
            humidity: null,
            pressure: null,
            wind: null,
            daysForecast: []
        }

        // Get data for default location 'London' to start with
        this.getLocationData('London', this.state.forecastFor);

        this.onAlter = this.onAlter.bind(this);
    }

    getLocationData(city, forecastFor) {
        this.serverRequest = 
          axios
            .get("//api.apixu.com/v1/forecast.json?key=603b6f7fd7e34d1c869132709172302&q=" + city + '&days=' + forecastFor)
            .then( (result) => {
                this.setState({
                    data: result.data,
                    weKnow: 'We know where you are!',
                    city: result.data.location.name,
                    country: result.data.location.country,
                    summary: result.data.current.condition.text,
                    temp: result.data.current.temp_c,
                    humidity: result.data.current.humidity,
                    pressure: result.data.current.pressure_mb,
                    wind: result.data.current.wind_mph,
                    daysForecast: result.data.forecast.forecastday
                });
            });
    }

    onAlter(forecastFor) {
        this.getLocationData(this.state.city, forecastFor);
    }

    render() {
        return (
            <div className="container weather-widget">
                <div className="row">
                    <Header/>
                    <NotificationBar weknow={this.state.weKnow} />
                </div>
                <div className="row">
                   <SearchBar city={this.state.city} 
                              forecastFor={this.state.forecastFor}
                              country={this.state.country}
                              onAlter={this.onAlter}/>
                </div>
                <div className="row">
                    <SummaryTitle />
                </div>
                <div className="row">
                    <SummaryToday summary={this.state.summary}
                                  temp={this.state.temp}
                                  humidity={this.state.humidity}
                                  pressure={this.state.pressure}
                                  wind={this.state.wind} />
                </div>
                <div className="row">
                    <div className="weather-widget__forecast">
                        <div className="weather-widget__forecast-header">
                            <ul className="weather-widget__forecast-headers col-lg-12">
                                <li className="weather-widget__forecast-headers__item col-lg-2">Date</li>
                                <li className="weather-widget__forecast-headers__item col-lg-4">Summary</li>
                                <li className="weather-widget__forecast-headers__item col-lg-2">Temp</li>
                                <li className="weather-widget__forecast-headers__item col-lg-2">Humidity</li>
                                <li className="weather-widget__forecast-headers__item col-lg-2">Wind</li>
                            </ul>
                        </div>
                        <div className="weather-widget__forecast-stats">
                            <ul className="weather-widget__forecast-stats__items">
                                <Forecast days={this.state.daysForecast} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
