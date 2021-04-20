var faker = require('faker');

var database = {
  marcas: [],
  modelos: []
};

for (var i = 1; i <= 8; i++) {
  database.marcas.push({
    id: i,
    nombre: faker.company.companyName(),
    urlLogo: faker.image.city()
  });

  for (var otroI = 1; otroI <= 3; otroI++) {
    database.modelos.push({
      id: otroI,
      nombre: faker.vehicle.model(),
      version: faker.address.zipCode(),
      combustible: faker.vehicle.type(),
      potenciaHp: faker.datatype.number(),
      marcaId: i,
      urlLogo: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_1df675a9f3044b23ab757147b45690b8.jpg'
    });
  }
}

console.log(JSON.stringify(database));