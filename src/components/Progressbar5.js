import React from "react";

const Progressbar5 = () => {
  return (
    <>
      <div className="card5">
        <div className="card-body5">
          <div className="d-flex">
            <div className="font"> Activity</div>
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
            className="activity-flex"
            style={{ borderBottom: "3px dotted #E8EAED" }}
          >
            <div
              className="font"
              style={{
                borderTop: "3px dotted rgb(232, 234, 237)",
                borderLeft: "3px dotted rgb(232, 234, 237)",
                borderRight: "3px dotted rgb(232, 234, 237)",
                color: "#96a4b5",
              }}
            >
              Processors
            </div>
            <div className="font">Network</div>
            <div className="font">Storage</div>
            <div className="font">Energy</div>
          </div>

          <br />

          <div className="tableflex5">
            <div>Operating</div>
            <div className="tablespecs">Windows 10 x64</div>
            <div> System Build</div>
            <div className="tablespecs">9876</div>
            <div>Admin</div>
            <div className="tablespecs">John Malkovich</div>
            <div>Wireless Network</div>
            <div className="tablespecs">13</div>
          </div>
          <br />

          <div
            style={{
              display: "flex",
              borderBottom: "3px dotted #E8EAED",
              columnGap: "30px",
              color: "#96a4b5",
            }}
          >
            <div>Process</div>
            <div>Read</div>
            <div>Threads</div>
            <div>CPU</div>
            <div>GPU</div>
            <div>Memory</div>
            <div>Tend</div>
          </div>

          <div
            style={{
              borderBottom: "3px dotted #E8EAED",
              display: "flex",
              columnGap: "36px",
              color: "#96a4b5",
            }}
          >
            <div>Chrome</div>
            <div>30MB/s</div>
            <div>20</div>
            <div>24%</div>
            <div>56%</div>
            <div>7.9GB</div>{" "}
            <div>
              {" "}
              <svg
                style={{ color: "red" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              </svg>{" "}
              <span
                style={{ color: "#404c56", left: "11px", position: "relative" }}
                class="material-symbols-rounded"
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
};
export default Progressbar5;
