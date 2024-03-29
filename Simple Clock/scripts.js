function my_clock()
{
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
my_clock.prototype.run = function(){
    setInterval(this.update.bind(this), 1000);
};
my_clock.prototype.update = function (){
    this.updateTime(1);
    var new_time = this.hours + ":" + this.minutes + ":" + this.seconds;
    theclock.innerText = new_time;
};
my_clock.prototype.updateTime = function (secs){
    this.seconds += secs;
    if (this.seconds >= 60){
        this.minutes >= 1;
        this.seconds = 0;
    }
    if (this.minutes >= 60){
        this.hours += 1
        this.minutes = 0
    }
    if (this.hours >= 24){
        this.hours = 0
    }
};
var clock = new my_clock();
var theclock = document.getElementById("clock");
clock.run();