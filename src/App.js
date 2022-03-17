import React, {useEffect, useState} from "react";
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import {getPlacesData} from './api/index'

import {CssBaseLine, Grid} from "@material-ui/core"

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    //built in function to get user location
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=> {
            setCoords({lat: latitude, lng: longitude})
        })
    },[])

    useEffect(()=> {
        getPlacesData(bounds.sw, bounds.ne)
        .then(data=> {
            console.log(data)
            setPlaces(data)
        })
    },[bounds,coords])

    return (
        <>
           <CssBaseLine/>
           <Header/>
           <Grid container spacing={3} style ={{width:'100%'}}>
                <Grid item xs ={12} md={4}>
                    <List places={places}/>
                </Grid>    
                <Grid item xs ={12} md={4}>
                    <Map
                        setCoords= {setCoords}
                        coords= {coords}
                        setBounds= {setBounds}
                        places= {places}
                    />
                </Grid> 
           </Grid> 
        </>
    )
}

export default App;