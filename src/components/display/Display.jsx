import React from "react";
import {
  BsArrowLeft,
  BsFillDropletFill,
  BsThermometerSun,
} from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { convertFahrenheitToCelsius } from "../../utils/logic";
import styles from "./display.module.css";

const Display = ({ data, loading }) => {
  const navigate = useNavigate();

  return (
    <div className={"container"}>
      <div className={styles.heading}>
        <BsArrowLeft onClick={() => navigate(-1)} />
        <h1>Weather App</h1>
      </div>
      {!data ? (
        <div className="loader">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : data?.errorMessage ? (
        <div className="error">
          <p>
            <RxCrossCircled />
            <span>{data?.errorMessage}</span>
          </p>
          <button onClick={() => navigate(-1)}>Try again</button>
        </div>
      ) : (
        <>
          <div className={styles.mainSection}>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`}
              alt="icon"
              loading="lazy"
            />
            <p className={styles.temperature}>
              {convertFahrenheitToCelsius(data?.main?.temp)} <sup>o</sup>C
            </p>
            <p className={styles.type}>{data?.weather?.[0]?.description}</p>
            <p className={styles.location}>
              <MdOutlineLocationOn />
              {data?.name}, {data?.sys?.country}
            </p>
          </div>
          <div className={styles.footer}>
            <div className={styles.left}>
              <BsThermometerSun />
              <div className={styles.context}>
                <p className={styles.temperature}>
                  {convertFahrenheitToCelsius(data?.main?.feels_like)}{" "}
                  <sup>o</sup>C{/* 16 &#8451; */}
                </p>
                <p className={styles.type1}>Feels like</p>
              </div>
            </div>
            <div className={styles.right}>
              <BsFillDropletFill />
              <div className={styles.context}>
                <p className={styles.temperature}>{data?.main?.humidity} %</p>
                <p className={styles.type1}>Humidity</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Display;
