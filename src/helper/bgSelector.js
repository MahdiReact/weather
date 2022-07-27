const bgSelector = (howsWeather) => {
    switch (howsWeather) {
        case "Clouds":
            return "https://wallpaperaccess.com/full/1575262.jpg";
            break;
        case "Clear":
            return "https://imageio.forbes.com/specials-images/dam/imageserve/965694882/960x0.jpg?format=jpg&width=960";
            break;
        case "Snow":
            return "https://res.allmacwallpaper.com/get/iMac-21-inch-wallpapers/Winter-night-sky-1920x1080/2573-9.jpg";
            break;
        case "Rain":
            return "https://c4.wallpaperflare.com/wallpaper/766/271/698/birds-cloudy-rain-sky-wallpaper-preview.jpg";
            break;
        case "Drizzle":
            return "https://c.pxhere.com/photos/3b/e6/abstract_art_berlin_black_black_and_white_blurred_buildings_city-1508631.jpg!d";
            break;
        case "Thunderstorm":
            return "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcm0lMjBza3l8ZW58MHx8MHx8&w=1000&q=80";
            break;
        default:
            return 'https://freerangestock.com/sample/130234/sky-full-of-hot-air-balloons.jpg';
            break;
    }
}
export default bgSelector;