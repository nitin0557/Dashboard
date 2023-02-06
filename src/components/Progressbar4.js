import React, { useState } from "react";

const Progressbar4 = () => {
  const Slider = () => {
    const [done, setValue] = useState(0);

    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(done * 100) / 10}% 100% `,
        // backgroundColor:'#00B6FF'
      };
    };

    return (
      <div className="slider">
        <input
          max={250}
          type="range"
          style={getBackgroundSize()}
          value={done}
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
        <br />
        <span style={{ position: "relative", left: " 210px", bottom: "40px" }}>
          {done}mm
        </span>
        <br />
        <br />
      </div>
    );
  };

  return (
    <>
      <div className="card4">
        <div className="card-body4">
          <div className="d-flex">
            <div className="font"> Cooling</div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                style={{ position: "relative", right: "15px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-sliders"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
              </svg>
            </span>
          </div>

          <div
            className="d-flex"
            style={{ borderBottom: "2px dotted rgb(232, 234, 237)" }}
          >
            <div className="font">Fans</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>
          <br />
          <div>
            <span style={{ color: "#96a4b5" }}>Left Frontal Fan</span>
            <span>
              {" "}
              <Slider />{" "}
            </span>
            <div style={{ position: "relative", top: "18px", left: "210px" }}>
              <div className="font">250RPM</div>
            </div>
          </div>
          <svg
            style={{
              marginTop: "10px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0H24V24H0z" />{" "}
              <path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" />{" "}
            </g>{" "}
          </svg>
          <br />
          <div className="d-flex"></div>
          <br />
          <div style={{}}>
            <span style={{ color: "#96a4b5" }}>Right Frontal Fan</span>
            <span>
              {" "}
              <Slider />{" "}
            </span>
            <div style={{ position: "relative", top: "15px", left: "210px" }}>
              <div className="font">250RPM</div>
            </div>
          </div>
          <svg
            style={{ 
              marginTop: "10px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0H24V24H0z" />{" "}
              <path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" />{" "}
            </g>{" "}
          </svg>
          <br />
          <div className="content-icons">
            <div
              style={{
                backgroundColor: "#dee2e6",
                width: "48px",
                height: "29px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-sliders"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1h4.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />{" "}
              </svg>
            </div>

            <svg
              style={{
                marginTop: "10px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0H24V24H0z" />{" "}
                <path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" />{" "}
              </g>{" "}
            </svg>
            <svg
              style={{
                marginTop: "10px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-speedometer2"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />{" "}
              <path
                fill-rule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
              />{" "}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar4;
