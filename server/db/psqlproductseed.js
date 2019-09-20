const faker = require('faker');
const fs = require('fs');

let stream = fs.createWriteStream("products.txt", {flags:'a'});

for (let i = 0; i < 10000000; i++) {
  let entry = i;
  let name = faker.commerce.productName();
  stream.write(entry + "|" + name + "\n");
}

stream.end();