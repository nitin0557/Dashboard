import React from "react";

import UsageBar from "./UsageBar";

const Progressbar2 = () => {
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
     
      <div className="card2">
        <div className="card-body2">
          <div className="d-flex">
            <div className="font"> Usage</div>
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

          <div className="tableflex">
            <div>CPU</div>
            <div className="tablespecs">Intel Core I7</div>
            <div>Base(Turbo)</div>
            <div className="tablespecs">4 Ghz (4.4Ghz)</div>
            <div>Cores(Threads)</div>
            <div className="tablespecs">4(8)</div>
          </div>
          <br />
          <div>
            <div className="progressflex2">
              <Progress />
            </div>
          </div>

          <br />
          <div className="d-flex">
            <div className="font">Usage(Load)</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>

          <div className="progressflexbar">
            <span className="bar-flex">
              <span style={{ fontSize: "40px", width: "10px" }}>78%</span>

              <UsageBar />
            </span>
          </div>
          <br />

          <div className="tableflex2">
            <div
              style={{
                display: "flex",
                columnGap: "59px",
                borderBottom: "2px dotted #E8EAED",
                color: "#96a4b5",
              }}
            >
              <div>Cores</div>
              <div
                style={{
                  display: "flex",
                  columnGap: "34px",
                  position: "relative",
                  left: "41px",
                }}
              >
                <div className="tablespecs"> 1</div>
                <div className="tablespecs">2</div>
                <div className="tablespecs">3</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                columnGap: "45px",
                borderBottom: "2px dotted #E8EAED",
                color: "#96a4b5",
              }}
            >
              <div>
                {" "}
                <span>Usage %</span>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "26px",
                  position: "relative",
                  left: "41px",
                }}
              >
                {" "}
                <div className="tablespecs">27</div>
                <div className="tablespecs">78</div>
                <div className="tablespecs">13</div>
              </div>
            </div>

            <div
              style={{ display: "flex", columnGap: "72px", color: "#96a4b5" }}
            >
              <div>Tendency</div>
              <div style={{ display: "flex", columnGap: "12px" }}>
                <div>
                  <svg
                    style={{ backgroundColor: "EF0B0BF2" }}
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
                      fill="red"
                    ></path>{" "}
                  </svg>
                </div>
                <div>
                  <svg
                    style={{ color: "red" }}
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
                      fill="red"
                    ></path>{" "}
                  </svg>
                </div>
                <div>
                  <svg
                    style={{ color: "red" }}
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
                      fill="red"
                    ></path>{" "}
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="font">Graphics</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>

          <div className="tableflex">
            <div>GPU Name</div>
            <div className="tablespecs">NVIDIA GTX 980</div>
            <div>Bus Width</div>
            <div className="tablespecs">4 Ghz (4.4Ghz)</div>
            <div>Memory</div>
            <div className="tablespecs">4096(GDDRS)</div>
          </div>

          <br />
          <div className="d-flex">
            <div className="font">Usage(Load)</div>
            <span style={{ color: "#404c56" }} class="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar2;
