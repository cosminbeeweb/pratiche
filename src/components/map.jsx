import React, { Component } from 'react';
import { initMap } from "../assets/js/helper";

class Map extends Component {
    componentDidMount()
    {
        initMap();
    }

    render()
    {
        return(
            <div id="map"></div>
        );
    }
}

export default Map;