import React, { useEffect, useState } from "react";
import ChartArea from "./ChartArea";

const Progressbar3 = () => {
  const Progress = () => {
    let readings = [
      {
        value: 60,
        color: "#00b6ff",
      },
      {
        value: 15,
        color: "red",
      },
      {
        value: 23,
        color: "#dee2e6",
      },
    ];

    return (
      <div className="progress2">
        {readings.map((item, i) => {
          if (item.value > 0) {
            return (
              <div
                className="value"
                key={i}
                style={{ backgroundColor: item.color, width: item.value + "%" }}
              ></div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  return (
    <>
      <div className="card3">
        <div className="card-body3">
          <div className="d-flex">
            <div className="font"> Allocation</div>
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
            style={{ borderBottom: "2px dotted whitesmoke" }}
          >
            <div className="font">RAM</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>

          <div className="tableflex">
            <div>Installed</div>
            <div className="tablespecs">16Gb DDR3</div>
            <div>DRAM Freq</div>
            <div className="tablespecs">4 Ghz (4.4Ghz)</div>
            <div>Cores(Threads)</div>
            <div className="tablespecs">4(8)</div>
          </div>
          
          <div>
            <div className="progressflex3">
              <Progress />
            </div>
          </div>

          <br />

          <div
            style={{
              display: "flex",
              columnGap: "91px",
              borderBottom: "2px dotted #E8EAED",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "14px",
                color: "rgb(150, 164, 181)",
              }}
            >
              <svg
                style={{ color: "rgb(0, 182, 255)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  fill="#00b6ff"
                ></path>{" "}
              </svg>
              In Use
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "14px",
                color: "rgb(150, 164, 181)",
              }}
            >
              <span
                className="tablespecs"
                style={{
                  columnGap: "10px",
                  color: "#323c48",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                796MB{" "}
                <svg
                  style={{ color: "#dde2e6" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-up-short"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                  />{" "}
                </svg>
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              borderBottom: "2px dotted #E8EAED",
              columnGap: "73px",
              color: "#E8EAED",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                columnGap: "15px",
                color: "#96a4b5",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                style={{ color: "red" }}
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  fill="red"
                ></path>{" "}
              </svg>
              In Cache
            </div>
            <div
              className="tablespecs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "5px",
              }}
            >
              180 MB{" "}
              <svg
                style={{ color: "#dde2e6" }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-down-short"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />{" "}
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", columnGap: "71px" }}>
            <div
              style={{
                columnGap: "10px",
                color: "#96a4b5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
              </svg>
              Available
            </div>
            <div
              className="tablespecs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "3px",
              }}
            >
              1672 MB{" "}
              <svg
                style={{ color: "#dde2e6" }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-down-short"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />{" "}
              </svg>
            </div>
          </div>

          <br />

          <div className="d-flex-chart">
            <ChartArea />
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar3;
