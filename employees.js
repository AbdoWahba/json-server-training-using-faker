var Faker = require("faker");

function generateEmployeeData() {
  var employee = [];

  for (let id = 1; id < 50; id++) {
    var name = Faker.name.firstName();
    var email = Faker.internet.email();
    var city = Faker.address.city();

    employee.push({ id: id, name: name, email: email, city: city });
  }
  console.log(employee);
  return { employees: employee };
}

module.exports = generateEmployeeData;
