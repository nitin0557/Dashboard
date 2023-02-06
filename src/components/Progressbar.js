import React from "react";
import ChartsLine from "./ChartsLine";

const Progressbar = () => {
  const Progress = ({ done }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ width: `${done}%`, opacity: "1" }}
        ></div>
      </div>
    );
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div className="font"> Temperatures</div>
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
            <div className="font">Processors</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>
          <div className="d-flex">
            {" "}
            <div>
              <div style={{ color: "#0b2234", fontSize: "30px" }}> 39º</div>
            </div>
            <div
              style={{
                position: "relative",
                top: "-2px",
                left: "33px",
                fontSize: "17px",
                color: "#cdd4d8",
              }}
            >
              {" "}
              102ºF
              <svg
                style={{
                  color: "#006bff",
                  position: "relative",
                  top: "29px",
                  right: "30px",
                }}
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
                  fill="#00b6ff"
                ></path>{" "}
              </svg>
            </div>
          </div>

          <div>
            <div className="progressflex1">
              Core 0
              <Progress done={86} />
              <div>86 %</div>
            </div>

            <div className="progressflex1">
              Core 1
              <Progress done={40} />
              40%
            </div>

            <div className="progressflex1">
              Core 2
              <Progress done={86} />
              86%
            </div>

            <div className="progressflex1">
              {" "}
              Core 3
              <Progress done={40} />
              40%
            </div>
          </div>

          <div className="d-flex">
            <div className="font">Graphics</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>

          <div className="progressflex1">
            <div>
              <div style={{ color: "#0b2234", fontSize: "30px" }}>68º</div>
            </div>

            <div
              style={{
                position: "relative",

                top: "6px",
                fontSize: "19px",
                color: "#cdd4d8",
              }}
            >
              <div style={{ color: "#cdd4d8" }} className="font">
                102ºF
              </div>
              <svg
                style={{
                  color: "red",
                  position: "relative",
                  bottom: "7px",
                  left: "23px",
                }}
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
                  fill="re   d"
                ></path>{" "}
              </svg>
            </div>
          </div>

          <div className="progressflex1">
            Core
            <Progress done={86} />
            86%
          </div>

          <div className="d-flex">
            <div className="font">Storage</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>

          <div className="d-flex-chart">
            {/* <div className="font"> Charts</div> */}
            <ChartsLine />
          </div>

          <div className="d-flex">
            {" "}
            <div className="font"> Samsung 850 PRO</div>
            <div> 512GB</div>
          </div>
          <div>
            <div className="progressflex1">
              SSD 0
              <Progress done={31} />
              31ºC
            </div>
          </div>
          <div className="d-flex">
            {" "}
            <h5 className="font"> WD Black</h5>
            <div> 1 TB</div>
          </div>

          <div className="progressflex1">
            HDD 1
            <Progress done={81} />
            81 %
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar;
