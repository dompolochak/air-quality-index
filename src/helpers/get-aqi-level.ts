

export function getAQILevel(aqi: number): [string,string]{

    if(aqi<= 50){
        return ["Green", "Good"];
    }
    else if(aqi<= 100){
        return ["Yellow", "Moderate"];
    }
    else if(aqi<= 150){
        return ["Orange", "Unhealthy for Sensitive Groups"];
    }
    else if(aqi<=200){
        return ["Red", "Unhealthy"];
    }
    else if(aqi <= 300){
        return ["Purple", "Very Unhealthy"];
    }
    else{
        return ["Maroon", "Hazardous"];
    }


}