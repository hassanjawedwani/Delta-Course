// This is my Server

import mysql from 'mysql2/promise';
import { faker } from '@faker-js/faker';

const getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '12345'
});

try {
  connection.query("SHOW TABLE", (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
  })
} catch (err) {
  console.log(err);
}