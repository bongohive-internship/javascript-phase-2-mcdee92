function printDate() {
    var now = new Date();
    var currentDate = now.toDateString();
    var currentTime = now.getHours() + ':' + now.getMinutes();
    console.log('The current date is ' + currentDate + ' and the current time is ' + currentTime);
}

printDate();
