import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./input.module.css";

const Input = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // setGeoLocation({
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        // });
        setLoading(false);
        navigate(
          `/weather?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        );
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setLoading(false);
          toast.error(
            "Permission denied, please check settings of your browser"
          );
          // console.log("Permission denied");
        }
      }
    );
  };

  return (
    <div className={"container"}>
      <h1 className={styles.heading}>Weather App</h1>
      <div className={styles.inputDiv}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
          onKeyDown={(e) => {
            if (location && e.key === "Enter") {
              navigate(`/weather/${location}`);
              setLocation("");
            }
          }}
        />
      </div>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.autoBtn}>
        <button
          className={styles.btn}
          onClick={
            !loading
              ? getLocation
              : () => {
                  console.log("Wait");
                }
          }
        >
          {loading ? (
            <div className="loader">
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            "Get Device Location"
          )}
        </button>
      </div>
    </div>
  );
};

export default Input;
