function date() {
  /* Date */

  const deadLine = "2022-07-31";

  function getTime(endTime) {
    const TOTAL = Date.parse(endTime) - Date.parse(new Date());
    const DAYS = Math.floor(TOTAL / (1000 * 60 * 60 * 24));
    const SECONDS = Math.floor((TOTAL / 1000) % 60);
    const MINUTES = Math.floor((TOTAL / (1000 * 60)) % 60);
    const HOURS = Math.floor((TOTAL / (1000 * 60 * 60)) % 24);

    return {
      total: TOTAL,
      days: DAYS,
      hours: HOURS,
      minutes: MINUTES,
      seconds: SECONDS,
    };
  }

  function getZero(number) {
    if (number >= 0 && number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
      const time = getTime(endTime);
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minutes);
      seconds.innerHTML = getZero(time.seconds);
      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);
}

export default date;
