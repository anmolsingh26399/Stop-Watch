import React from "react";
import { useState, useRef } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
    setRunning(true);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTimer(0);
  };

  const DisplayTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const second = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <h1>{DisplayTime(timer)}</h1>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </>
  );
};

export default StopWatch;
