import { IAQIData } from "../types/types";

//Gets AQI from user input city
export async function fetchAQIByCity(city: string): Promise<IAQIData>{
    const response = await fetch(`https://api.waqi.info/feed/${city}/?token=edacc5e0a4971e082faf5c057fc0ffac947b2f75`); 
    const data = await response.json();

    return {
        aqi: data.data.aqi,
        city: data.data.city.name,
        lng: data.data.city.geo[0],
        lat: data.data.city.geo[1]
    }
}