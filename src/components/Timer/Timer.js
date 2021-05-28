import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

let _second = 1000;
let minute = _second * 60;
let hour = minute * 60;
let day = hour * 24;
let timer;

const Timer = ({ timeTillDate }) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  // const [timeUp, setTimeup] = useState(false);
  let eventDate = new Date(timeTillDate);

  useEffect(() => {
    function showRemaining() {
      let now = new Date();
      let distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
      let days = Math.floor(distance / day);
      let hours = Math.floor((distance % day) / hour);
      let minutes = Math.floor((distance % hour) / minute);
      let seconds = Math.floor((distance % minute) / _second);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }

    timer = setInterval(showRemaining, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeTillDate]);

  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  return (
    <div className={styles.Timer}>
      <h1 className="countdown-heading">Preostalo vreme za prijavu</h1>
      <div className="countdown-wrapper">
        {/* {days && ( */}
        <div className="countdown-item">
          <SVGCircle radius={daysRadius} />
          {days}
          <span>days</span>
        </div>
        {/* )} */}
        {/* {hours && ( */}
        <div className="countdown-item">
          <SVGCircle radius={hoursRadius} />
          {hours}
          <span>hours</span>
        </div>
        {/* )} */}
        {/* {minutes && ( */}
        <div className="countdown-item">
          <SVGCircle radius={minutesRadius} />
          {minutes}
          <span>minutes</span>
        </div>
        {/* )} */}
        {/* {seconds && ( */}
        <div className="countdown-item">
          <SVGCircle radius={secondsRadius} />
          {seconds}
          <span>seconds</span>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);

  let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  let d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default Timer;
