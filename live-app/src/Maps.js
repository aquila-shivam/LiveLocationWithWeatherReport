import React  from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '400px',
  height: '400px'
};


const onLoad = marker => {
    console.log('marker: ', marker)
}

function Maps() {
    
    const center = {
        lat: 20.2713,
        lng: 85.8334
      };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDkgcQiBEXE1mFTWYMptMWHTgwRo8vAzP4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
           <Marker
      onLoad={onLoad}
      position={center}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Maps)