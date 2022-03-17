import { Error } from "@material-ui/icons";
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (ne,sw) => {
    try {
        const {data: {data}} = await axios.get(URL, {
          params: {
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            bl_latitude: sw.lat,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '72fd21d9bdmsh94dd23e44548b09p1e33e4jsneea1f179badc'
          }}
          );
        return data
    } catch (error) {
        console.log(Error)
    }
}
