import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Error404 } from "../assets/404ErrorPage.svg";

const NotFound404 = () => {
  return (
    <div className="error">
      <Error404
        style={{
          width: "75vw",
          height: "75vh",
        }}
      />
      {/* <div className="btn"> */}
      <Link
        to={"/"}
        style={{
          color: "#fff",
          // borderBottom: "1px solid #fff",
        }}
      >
        Go back to Homepage
      </Link>
      {/* </div> */}
    </div>
  );
};

export default NotFound404;
