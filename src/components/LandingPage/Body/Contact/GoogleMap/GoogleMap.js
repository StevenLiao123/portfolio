import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import './GoogleMap.css';

class GoogleMap extends Component {
    render() {
        const style = {
            width: '85%',
            height: '85%',
            position: 'absolute'
        }

        return (
            <div className="google-map">
                <h3>Currenct Location:</h3>
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
    apiKey: (`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`)
})(GoogleMap);