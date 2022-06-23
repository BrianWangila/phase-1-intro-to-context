// Your code here
const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }

}

const createEmployeeRecords = (employeeRecords => {
  employeeRecords.forEach(array => {
    return createEmployeeRecord(array)
  })
})

const createTimeInEvent = (employeeRecord, dateStamp) => {
  const [date, hour] = dateStamp.split(" ")
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,


  })
  return employeeRecord
}

const createTimeOutEvent = (employeeRecord, dateStamp) => {
  const [date, hour] = dateStamp.split(" ")
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,


  })
  return employeeRecord
}

const hoursWorkedOnDate = (employeeRecord, dateStamp) => {
  const timeIn = employeeRecord.timeInEventsfind((event) => {
    return event.date === dateStamp

  })

  const timeOut = employeeRecord.timeOutEvents.find((event) => {
    return event.date === dateStamp
  })

  const timeWorked = timeOut.hour - timeIn.hour
  return timeWorked / 100
  
}


const wagesEarnedOnDate = (employeeRecord, dateStamp) => {
  const wagesEarned = hoursWorkedOnDate (employeeRecord, dateStamp)
  const realWage = wagesEarned * employeeRecord.payPerHour
  return parseInt(realWage)

}


const allWagesFor = (employeeRecord) => {
  return employeeRecord.timeInEvents.reduce(total, event => {
     return allWages.push(wagesEarnedOnDate(employeeRecord, event.date))

  }, 0)
}


const calculatePayroll = (employeeArray) => {
  return employeeArray.reduce((total, record) => {
    return total + allWagesFor(record)
  }, 0)

}
