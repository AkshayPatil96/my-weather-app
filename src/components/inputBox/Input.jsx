import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./input.module.css";

const Input = () => {
  const navigate = useNavigate();

  const loactionRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
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

  useEffect(() => {
    loactionRef.current.focus();

    return () => {};
  }, []);

  return (
    <div className={"container"}>
      <h1 className={styles.heading}>Weather App</h1>
      <div className={styles.inputDiv}>
        <input
          type="text"
          ref={loactionRef}
          placeholder="Enter city name"
          onKeyDown={(e) => {
            if (loactionRef?.current?.value && e.key === "Enter") {
              navigate(`/weather/${loactionRef?.current?.value}`);
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
