import React from "react";

const UsageBar = () => {
  const progress = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "0.1fr 0.1fr 0.1fr",
    gap: "26px",
  };

  let value = [60, 40, 20];
  let width = 20;
  let a = [];
  function setprogress() {
    for (let j = 0; j < 3; j++) {
      let ele = "";
      let testele = "";
      let eleArr = [];
      var rem = (value[j] % width) / 10;
      console.log("rem", rem);
      var quo = Math.floor(value[j] / width);
      console.log("qup", quo);
      for (let i = 0; i < 5; i++) {
        if (i < quo) {
          console.log("irun");

          ele = (
            <div
              style={{
                backgroundColor: "#00b6ff",
                height: "10px",
                width: "10px",
                margin: "2px 0",
              }}
            ></div>
          );
          eleArr.push(ele);
        } else if (i === quo) {
          console.log("ilast", i);
          ele = (
            <div
              style={{
                backgroundColor: "#dee2e6",
                height: "10px",
                width: "10px",
                margin: "2px 0",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <div
                style={{
                  backgroundColor: "#00b6ff",
                  height: value[j] * rem + "px",
                  width: "10px",
                }}
              ></div>
            </div>
          );
          eleArr.push(ele);
        } else {
          ele = (
            <div
              style={{
                backgroundColor: "#dee2e6",
                height: "10px",
                width: "10px",
                margin: "2px 0",
                overflow: "hidden",
              }}
            ></div>
          );

          eleArr.push(ele);
          testele = (
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {eleArr}
            </div>
          );
        }
      }
      a.push(testele);
    }

    console.log("asd", a);
    return a;
  }

  let test = setprogress();
  console.log("dd", test);

  return <div style={progress}>{test}</div>;
};
export default UsageBar;
