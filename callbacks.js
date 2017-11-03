class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let hrs, mins, secs;
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    if (this.hours <= 9) {
      hrs = `0${this.hours}`;
    } else {
      hrs = `${this.hours}`;
    }
    if (this.minutes <= 9) {
      mins = `0${this.minutes}`;
    } else {
      mins = `${this.minutes}`;
    }
    if (this.seconds <= 9) {
      secs = `0${this.seconds}`;
    } else {
      secs = `${this.seconds}`;
    }
    console.log(`${hrs}:${mins}:${secs}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      if (this.minutes === 60) {
        this.hours++;
        if (this.hours === 25) {
          this.hours = 0;
        }
        this.minutes = 0;
      }
      this.seconds = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();
