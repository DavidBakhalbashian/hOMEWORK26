class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    start() {
        setInterval(() => {
            this.seconds += 1
            if (this.seconds > 59) {
                this.minutes += 1;
                this.seconds -= 60;
                if (this.minutes > 59) {
                    this.hours += 1;
                    this.minutes -= 60;
                    if (this.hours > 23) {
                        this.hours -= 24
                    }
                }
            }
        }, 1000)
    };
    setAlert(hours, minutes, seconds) {
        return new Promise((resolv) => {
            setTimeout(() => {
                resolv()
            }, ((hours - this.hours) * 60 * 60 * 1000) + ((minutes - this.minutes) * 60 * 1000) + ((seconds - this.seconds) * 1000))

        })
    };
    setAlert1(hours, minutes, seconds) {
        return new Promise((resolv, reject) => {
            setTimeout(() => {
                reject(new Error())
            }, ((hours - this.hours) * 60 * 60 * 1000) + ((minutes - this.minutes) * 60 * 1000) + ((seconds - this.seconds) * 1000))

        })
    };

}


let clock = new Clock(33, 20, 10);
clock.start()

clock.setAlert(33, 20, 10).then(() => {
    console.log('WAKE UP');
})

clock.setAlert1(33, 20, 10).catch((error) => {
    console.log(error, 'YOU ARE LATE');
});











