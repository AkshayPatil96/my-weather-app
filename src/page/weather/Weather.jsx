import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Display from "../../components/display/Display";

const APIKEY = "e521b065438a9becddf8a515400f9d1a";

const Weather = () => {
  const navigate = useNavigate();

  const search = useLocation().search;
  const lat = new URLSearchParams(search).get("lat");
  const lng = new URLSearchParams(search).get("lng");

  const { location } = useParams();

  const [weatherData, setWeatherData] = useState(false);

  const getWeatherByLatLng = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}`
      );

      const data = await response?.data;
      setWeatherData(data);
    } catch (error) {
      console.log("error: ", error?.response?.data?.message);
      setWeatherData({
        errorMessage: error?.response?.data?.message,
      });
    }
  };

  const getWeatherByCity = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`
      );

      const data = await response?.data;
      setWeatherData(data);
    } catch (error) {
      console.log("error: ", error?.response?.data?.message);
      setWeatherData({
        errorMessage: error?.response?.data?.message,
      });
    }
  };

  useEffect(() => {
    if (lat && lng) {
      getWeatherByLatLng(lat, lng);
    }

    return () => {};
  }, [lat, lng]);

  useEffect(() => {
    if (location) {
      getWeatherByCity(location);
    }

    return () => {};
  }, [location]);

  useEffect(() => {
    if (!location && !lat && !lng) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }

    return () => {};
  }, [location, lat, lng, navigate]);

  return (
    <div>
      <Display data={weatherData} />
    </div>
  );
};

export default Weather;
