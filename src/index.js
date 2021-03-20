import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

const Reloj = () => {
  const [time, updateTime] = useState(new Date());
  return (
    <Fragment>
      <div class="Reloj">
        <div className="hours">{time.getHours()}</div>
        <div className="minutes">{time.getMinutes()}</div>
        <div className="seconds">{time.getSeconds()}</div>
        <div className="update" onClick={() => updateTime(new Date())}>
          🔁
        </div>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<Reloj />, document.getElementById("root"));