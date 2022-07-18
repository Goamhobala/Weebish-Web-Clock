setInterval(main, 1000);

class SetClock {
  #second;
  #minute;
  #hour;
  constructor() {
    const d = new Date();
    this.#second = d.getSeconds();
    this.#minute = d.getMinutes();
    this.#hour = d.getHours();
  }

  get secondRatio() {
    return this.#second / 60;
  }

  get minuteRatio() {
    const totalSeconds = this.#second + this.#minute * 60;
    return totalSeconds / 3600;
  }

  get hourRatio() {
    const totalSeconds = this.#minute * 60 + this.#hour * 3600;
    return totalSeconds / 43200;
    // 43200 seconds in 12 hours
  }

  setRotation(element, ratio) {
    element.style.setProperty("--rotation", ratio * 360);
  }
}

function main() {
  const time = new SetClock();
  time.setRotation(document.querySelector(".hand-hour"), time.hourRatio);
  time.setRotation(document.querySelector(".hand-minute"), time.minuteRatio);
  time.setRotation(document.querySelector(".hand-second"), time.secondRatio);
}

main();
