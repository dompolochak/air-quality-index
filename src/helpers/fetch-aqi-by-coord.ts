import { IAQIData } from "../types/types";

//Gets AQI from coordinates
export async function fetchAQIByCoord(lat: number, lng: number): Promise<IAQIData>{
    const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=edacc5e0a4971e082faf5c057fc0ffac947b2f75`); 
    const data = await response.json();

    return {
        aqi: data.data.aqi,
        city: data.data.city.name,
        lng: lng ?? data.data.city.geo[0],
        lat: lat ?? data.data.city.geo[1]
    }
}
