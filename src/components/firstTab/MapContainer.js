import React, { Component, useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import { Button, message, Space } from 'antd';
import bankLocator from '../../assessts/images/locationBank.png'
export const MapContainer =(props)=> {
    const [bankData, setBankData] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const widthPercentage = windowSize.width < 600 ? '100%' : '80%';
    const heightPercentage = windowSize.width < 600 ? '50%' : '80%';
  useEffect(() =>{
      axios.get(`/maps/api/place/nearbysearch/json?key=AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo&location=${props.latitude},${props.longitude}&radius=5000&type=bank&keyword=hdfc`,
              {
                headers:{
                    'Content-Type': 'application/json',
                },
            }).then((res) =>{
                let data = res.data.results;
                data = data.map((item,index) =>{
                    return {
                        ...item,
                        id:index,
                        checked:false
                    }
                })
                setBankData(data);
            }).catch((error) => {
                message.error('An error occured, try refreshing');
                console.log("erroo", error);
            });
        if(!props.latitude || !props.longitude){
            message.error('An error occured, try refreshing');
        }    
        },[])
useEffect(() =>{
 props.passingBankData(bankData)
},[bankData])
  
    return (
        <Map
                google={props.google} 
            zoom={14}
            style={{ width: `${widthPercentage}`, height: `${heightPercentage}` }}
            initialCenter={{
                lat: props.latitude,
                    lng: props.longitude
                }}
            >
            <Marker
                name={'Your Location'}
                position={{ lat: props.latitude, lng: props.longitude }}
                 />
                 {
                    bankData.map(item => {
                        return (
                            <Marker
                                name={item.name}
                                position={{ lat: item.geometry.location.lat, lng: item.geometry.location.lng }}
                                icon={{
                                    url: bankLocator,
                                }}
                            />
                        )
                    })
                 }
           
            </Map>
        );
    }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo')
})(MapContainer)
