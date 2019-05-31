import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

const mapStyles = {
    map:{
        position:'absolute',
        width:'50%',
        height:'70%'
    }
}


class CurrentLocation extends React.Component{
    constructor(props){
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }

    recenterMap(){
        const map = this.map;
        const current = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if(map){
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.google !== this.props.google){
            this.loadMap();
        }
        if(prevState.currentLocation !== this.state.currentLocation){
            this.recenterMap();
        }
    }

    componentDidMount(){
        if(this.props.centerAroundCurrentLocation){
            if(navigator && navigator.geolocation){
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation:{
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                    console.log("posi", this.state.currentLocation.lat);
                    console.log("posi1", this.state.currentLocation.lng);
                });
            }
        }
            axios.get(`http://localhost:5000/api/shops?lng=`+this.state.currentLocation.lng+`&lat=`+this.state.currentLocation.lat)
                 .then(res => {
                   const shops = res.data;
                   this.setState({shops});
                   console.log("map position", shops)
        
                 })
          
        this.loadMap();
    }

    loadMap(){
        if(this.props && this.props.google){
            const{google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            const node = ReactDOM.findDOMNode(mapRef);

            let {zoom} = this.props;
            const {lat,lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );
            
            this.map = new maps.Map(node, mapConfig);
        }
    }
    renderChildren(){
        const  {children} = this.props;
        if(!children)return;

        return React.Children.map(children, c => {
            if (!c) return;
            return React.cloneElement(c, {
              map: this.map,
              google: this.props.google,
              mapCenter: this.state.currentLocation
            });
    });
} 
render() {
    const style = Object.assign({}, mapStyles.map);
   return (
     <div>
       <div style={style} ref="map">
         Loading map...
       </div>
       {this.renderChildren()}
       <div style={{float:'right'}}>
       {this.shops}
       </div>
     </div>
   );
 }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom:18,
    initialCenter : {
        lat: 12.930830,
        lng: 77.632750
    },
    centerAroundCurrentLocation: false,
    visible: true
}