"use strict";

const systemClock = document.querySelector(".sys-clock");
console.log("Found element:", systemClock);

const updateClock = function () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  systemClock.textContent = currentTime;
};

setInterval(updateClock, 1000);
