import React from 'react';

const Result = (props) => {

    const{err, location, temp, date, sunrise, sunset, 
    pressure, wind, feelTemp, humid, vision, windDirection, clouds} = props.weather;

    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunSet = new Date(sunset * 1000).toLocaleTimeString();

    if(!err && location) {
        content = (
            <>
                <p>Warunki atmosferyczne dla <strong>{location}</strong></p>
                <p>Dane dla dnia i godziny: <strong>{date}</strong></p>
                <p>Aktualna temperatura: <strong>{temp} *C</strong></p>
                <p>Temp. odczuwalna: <strong>{feelTemp} *C</strong></p>
                <p>Wilgotność: <strong>{humid}%</strong></p>
                <p>Wschód słońca: <strong>{sunriseTime}</strong></p>
                <p>Zachód słońca: <strong>{sunSet}</strong></p>
                <p>Ciśnienie atmosferyczne: <strong>{pressure}hPa</strong></p>
                <p>Prędkość wiatru: <strong>{wind}m/s</strong></p>
                <p>Kierunek wiatru: <strong>{windDirection}*</strong></p>
                <p>Zachmurzenie: <strong>{clouds}%</strong></p>
                <p>Widoczność: <strong>{vision}m</strong></p>
            </>
        )
    }

    return ( 
        <div className="result">
            {err ? 'Bład! Miejscowość nie znaleziona lub inny problem ;)' : content}
        </div>
     );
}
 
export default Result;