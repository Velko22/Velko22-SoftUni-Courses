function companyUsers(input) {
    let companies = {};
  
    for (let line of input) {
      if (line === 'End') {
        break;
      }
  
      let [company, employeeId] = line.split(' -> ');
  
      if (!companies.hasOwnProperty(company)) {
        companies[company] = new Set();
      }
  
      companies[company].add(employeeId);
    }
  
    let sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (let [company, employees] of sortedCompanies) {
      console.log(company);
  
      for (let employeeId of employees) {
        console.log(`-- ${employeeId}`);
      }
    }
  }
  
  // Example usage:
  companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345',
    'End'
  ]);
  