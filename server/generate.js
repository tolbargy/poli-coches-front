var faker = require('faker');

var database = { marcas: [] };

for (var i = 1; i <= 300; i++) {
  database.marcas.push({
    id: i,
    nombre: faker.company.companyName(),
    urlLogo: faker.image.business()
  });
}

console.log(JSON.stringify(database));