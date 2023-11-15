function createEmployeeList(employees) {
    let employeeList = {};
  
    for (let employee of employees) {
      let [firstName, lastName] = employee.split(' ');
      let fullName = firstName + ' ' + lastName;
      let personalNumber = fullName.length;
  
      employeeList[fullName] = personalNumber;
    }
  
    for (let name in employeeList) {
      console.log(`Name: ${name} -- Personal Number: ${employeeList[name]}`);
    }
  }
  
  // Example usage
  createEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ]);
 
  