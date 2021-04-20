var faker = require('faker');

var database = {
  marcas: [],
  modelos: []
};

for (var i = 1; i <= 16; i++) {
  database.marcas.push({
    id: i,
    nombre: faker.company.companyName(),
    urlLogo: faker.image.city()
  });

  for (var otroI = 1; otroI <= 5; otroI++) {
    database.modelos.push({
      id: otroI,
      nombre: faker.vehicle.model(),
      version: faker.address.zipCode(),
      combustible: faker.vehicle.type(),
      potenciaHp: faker.datatype.number(),
      marcaId: i
    });
  }
}

console.log(JSON.stringify(database));