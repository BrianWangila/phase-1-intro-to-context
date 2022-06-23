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
  return employeeRecord
}
