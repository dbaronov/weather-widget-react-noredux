import React, { Component } from 'react';

class NotificationBar extends Component {
    
    render() {
        return (
            <div className="col-lg-12">
                <div className="weather-widget__info alert alert-info" role="info">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Info:</span>
                  <span className="weather-widget__info-instructions">{this.props.weknow}</span>
                </div>
            </div>
        )
    }

}

export default NotificationBar;