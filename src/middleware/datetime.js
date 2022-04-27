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
    return date.format(dateObj, 'MM/DD/YYYY HH:mm')
}

export {
    getDate,
    printDate,
}