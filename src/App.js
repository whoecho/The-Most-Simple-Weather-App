import logo from './logo.svg';
import './App.scss';
import axios from "axios";
import React from "react";
import './index.scss';

function App() {
    const [weather, setWeather] = React.useState()
    const [value, setValue] = React.useState()
    const [opened, setOpened] = React.useState(false)
    const [toggleIsFetching, setToggleIsFetching] = React.useState(null)


    function sos(e) {
        setValue(e.target.value)
        setOpened(true)
        setToggleIsFetching(true)
        axios.get(`http://api.weatherstack.com/current?access_key=f8e2410b92a660a4ec9f8e948bdd2e83&query=${value}&m&language`).then((res) => {
            console.log(res.data)
            setWeather(res.data)
            setToggleIsFetching(false)
        })
    }


    return (

        <div className="App">

                <div className="card">


                    {opened ?   <div>
                    {toggleIsFetching ? <img className="loader" src="/images/Preloader.svg"/> :
                        <div>
                            <div className="header">
                                <div >
                                    <h2>{weather.request.query}</h2>
                                    <h3>{weather.location.localtime}</h3>
                                </div>

                                <h1>{weather.current.temperature}°</h1>
                            </div>

                            <h1 >{weather.current.weather_descriptions}</h1>






                            <img  src={weather.current.weather_icons}/>
                            <div className="footer">
                                <h2 >Humidity: {weather.current.humidity}%</h2>
                                <h1 >Pressure: {weather.current.pressure}</h1>
                                <h2 >UV Index: {weather.current.uv_index}</h2>
                            </div>
                        </div>
                    }
                   </div> : <p >The Most Simple Weather App.</p>}

                </div>





            <div className="under">
                <input placeholder="Enter the city" value={value} onChange={(e) => {
                    setValue(e.target.value)
                }}/>
                <button onClick={sos}>Show weather</button>
            </div>


        </div>


    );
}

export default App;
