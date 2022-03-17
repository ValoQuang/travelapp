import React, {useEffect} from "react";
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import {getPlacesData} from './api'

import {CssBaseLine, Grid} from "@material-ui/core"

const App = () => {
    const [places, setPlaces] = useState([]);

    useEffect(()=> {
        getPlacesData()
        .then(data=> {
            console.log(data)
            setPlaces(data)
        })
    },[])

    return (
        <>
           <CssBaseLine/>
           <Header/>
           <Grid container spacing={3} style ={{width:'100%'}}>
                <Grid item xs ={12} md={4}>
                    <List/>
                </Grid>    
                <Grid item xs ={12} md={4}>
                    <Map/>
                </Grid> 
           </Grid> 
        </>
    )
}

export default App;