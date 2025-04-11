import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("this is timeout started");
    const timerTimeout = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    console.log("this is interval started");

    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
