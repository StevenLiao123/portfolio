import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import './GoogleMap.css';

class GoogleMap extends Component {
    render() {
        const style = {
            width: '80%',
            height: '80%',
            position: 'relative'
        }

        return (
            <div className="googlemap">
                <h2>Currenct Location:</h2>
                <Map 
                    google={this.props.google} 
                    zoom={14} 
                    style={style}
                    initialCenter={{
                        lat: -33.868820,
                        lng: 151.209290
                    }}
                    onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDYVK-aRUg7mKQiPLkYv_evT7k-JPLF5Ls")
})(GoogleMap);