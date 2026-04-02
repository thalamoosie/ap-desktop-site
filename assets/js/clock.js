"use strict";

const systemClock = document.querySelector(".sys-clock");

const updateClock = function () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  systemClock.textContent = currentTime;
};

updateClock();
setInterval(updateClock, 1000);
