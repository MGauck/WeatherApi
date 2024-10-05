export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Temperatures are in Kelvin, as this is how Open Weather API returns it
// This can be changed by sending additional parameter to the API, but I decided to leave it as is
export const COLD_THRESHOLD = 283.15;
export const HOT_THRESHOLD = 293.15;
   
export enum TEMPERATURE {
   IS_COLD = "It is Cold",
   IS_MODERATE = "It is Moderate",
   IS_HOT = "It is Hot",
}