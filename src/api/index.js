import { Error } from "@material-ui/icons";
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const options = {
    params: {
      latitude: '12.91285',
      longitude: '100.87808',
      limit: '30',
      currency: 'USD',
      distance: '2',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '72fd21d9bdmsh94dd23e44548b09p1e33e4jsneea1f179badc'
    }
  };

const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return data
    } catch (error) {
        console.log(Error)
    }
}

export default getPlacesData