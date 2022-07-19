const clockElement = document.getElementById('clock');
class Clock {
    constructor() {
        let time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.tick();
    }

    printTime() {
        var minutes = this.minutes;
        if (this.minutes < 10) 
            var minutes = `0${this.minutes}`
        var seconds = this.seconds;
        if (this.seconds < 10) 
            var seconds = `0${this.seconds}`
        return `${this.hours}:${minutes}:${seconds}`;
    }

    tick() {
        let that = this;
        setInterval(function() {
            clockElement.innerText = that.printTime();
            that.seconds += 1;
            if (that.seconds === 60) {
                that.minutes += 1;
                that.seconds = 0;
            } if (that.minutes === 60) {
                that.hours += 1;
                that.minutes = 0;
            } 
            if (that.hours === 24) {
                that.hours = 0;
            }
            
        }, 1000);
    }
}

const clock = new Clock();
