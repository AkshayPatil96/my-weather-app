import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page";
import NotFound404 from "./page/NotFound404";
import Weather from "./page/weather/Weather";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather/:location" element={<Weather />} />
        <Route path="/weather" element={<Weather />} />

        {/* Error */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            fontWeight: "600",
            fontSize: "18px",
          },
        }}
      />
    </div>
  );
};

export default App;
