import React, { useState, useEffect } from "react";

// duration "PT18M17S" to hh:mm:ss

const ParseDuration = ({ isoDuration }) => {
  const durationRegex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const [hours, minutes, seconds] = isoDuration.match(durationRegex);

  const parsedHours = hours ? parseInt(hours.slice(0, -1)) : 0;
  const parsedMinutes = minutes ? parseInt(minutes.slice(0, -1)) : 0;
  const parsedSeconds = seconds ? parseInt(seconds.slice(0, -1)) : 0;

  const formattedDuration = `${
    parsedHours > 0 ? parsedHours.toString().padStart(2, "0") + ":" : ""
  }${parsedMinutes.toString().padStart(2, "0")}:${parsedSeconds
    .toString()
    .padStart(2, "0")}`;
  return <span>{formattedDuration}</span>;
};

// formatting views 1M,1k,1crore
export const FormatViews = ({ views }) => {
  if (views >= 100000000) {
    return (views / 10000000).toFixed(1) + " crore";
  } else if (views >= 10000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 10000) {
    return (views / 1000).toFixed(1) + "k";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "k";
  } else {
    return views.toString();
  }
};

//upload date formatting "2023-08-27T13:03:00Z" to 20 days or 1 month or 1year ago

export const DateDifference = ({ inputDate }) => {
  const [difference, setDifference] = useState(null);

  useEffect(() => {
    const parsedInputDate = new Date(inputDate);
    const currentDate = new Date();

    const timeDifference = currentDate - parsedInputDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(monthsDifference / 12);

    if (yearsDifference > 0) {
      setDifference(
        `${yearsDifference} year${yearsDifference === 1 ? "" : "s"}`
      );
    } else if (monthsDifference > 0) {
      setDifference(
        `${monthsDifference} month${monthsDifference === 1 ? "" : "s"}`
      );
    } else if (daysDifference > 0) {
      setDifference(`${daysDifference} day${daysDifference === 1 ? "" : "s"}`);
    } else if (hoursDifference > 0) {
      setDifference(
        `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"}`
      );
    } else if (minutesDifference > 0) {
      setDifference(
        `${minutesDifference} minute${minutesDifference === 1 ? "" : "s"}`
      );
    } else {
      setDifference(
        `${secondsDifference} second${secondsDifference === 1 ? "" : "s"}`
      );
    }
  }, []);

  return <>{difference && <span>{difference}</span>}</>;
};

export default ParseDuration;
