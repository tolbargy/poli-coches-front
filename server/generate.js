var faker = require('faker');

var database = { marcas: [] };

for (var i = 1; i <= 50; i++) {
  database.marcas.push({
    id: i,
    nombre: faker.company.companyName(),
    urlLogo: faker.image.city()
  });
}

console.log(JSON.stringify(database));