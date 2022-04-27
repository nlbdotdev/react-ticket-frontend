import date from 'date-and-time';

// use current time to fix delay

const timeURL = 'http://worldtimeapi.org/api/timezone/gmt'

async function getDate() {
    const response = await fetch(timeURL)
    let data = await response.json()
    let newDate = new Date(data.datetime)
    console.log("Get Date:", newDate)
    console.log("Print Date:", printDate(newDate))
    return newDate;
}

function printDate(dateObj) {
    // Date may have to be converted because redux doesn't like storing Date Objs
    if (!(dateObj instanceof Date)) {
        dateObj = new Date(dateObj)
    }
    return date.format(dateObj, 'MM/DD/YYYY HH:mm')
}

export {
    getDate,
    printDate,
}