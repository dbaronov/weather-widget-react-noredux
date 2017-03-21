import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.onAlter(this.refs.daysInput.value);
    }

    render() {
        return (
            <form className="weather-widget__form" onSubmit={this.handleChange}>
              <div className="col-lg-4">
                <div className="input-group">
                    <span className="input-group-addon">City/GPS:</span>
                        <input type="text" disabled className="weather-widget__city form-control" name="city" value={this.props.city} onChange={ (event) => this.outputValue(event, this.OnInputChange(this.state.city)) } placeholder="enter City here..."/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-group">
                    <span className="input-group-addon">Forecast for:</span>
                    <input type="text"
                           className="weather-widget__days form-control"
                           name="days"
                           defaultValue={this.props.forecastFor}
                           ref="daysInput"
                           placeholder="enter Days here... Max: 10" />
                    <span className="input-group-addon">days</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-group">
                    <span className="input-group-addon">Country:</span>
                    <input type="text" disabled className="weather-widget__country form-control" name="country" value={this.props.country} onChange={ (event) => this.outputValue(event, this.OnInputChange(this.state.country)) } placeholder="enter Country here..."/>
                    <span className="input-group-btn">
                        <input type="submit" role="button" value="Go!" className="weather-widget__submit btn btn-success" />
                    </span>
                </div>
              </div>
            </form>
        )
    }

}

export default SearchBar;
