const faker = require('faker');
const fs = require('fs');

const randomizer = max => {
  let num = Math.ceil(Math.random() * max);
  if (num < 10) num = `0${num}`;
  return num;
};
const randomizerFloor = max => {
  let num = Math.ceil(Math.random() * max);
    if (num < 10) num = `0${num}`;
  return num;
};

let stream = fs.createWriteStream("questions.txt", {flags:'a'});

for (let i = 9000000; i < 10000000; i++) {
  if (i % 100000 === 0) {
    console.log('hundred');
  }
  let entry = i;
  let number = Math.floor(Math.random() * (13 - 1) + 1);

  for (let i = 0; i < number; i++) {
    let question = faker.lorem.sentence() + '?';
    let answer = faker.lorem.sentence();
    let author = faker.name.findName();
    let votes = faker.random.number();
    let date = `20${randomizer(19).toString().padStart(2, '0')}-${randomizerFloor(11)}-${randomizer(31)}`

    stream.write(`${entry},${question},${answer},${author},${votes},${date}\n`);
  }
}

stream.end();