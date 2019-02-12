const fs = require('fs')
const path = require('path')
const faker = require('faker')



const generateUsers = count =>
  Array.from({ length: count }).map((item, index) => ({
    key: String(index),
    index: index + 1,
    lastLogin: faker.date.past(1),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    gedner: faker.random.arrayElement(['w', 'm']),
    skill: faker.random.arrayElement(['low', 'medium', 'high'])
  }))

const data = generateUsers(300)
const mockPath = path.join(__dirname, 'users.json')

fs.writeFileSync(mockPath, JSON.stringify(data), 'utf8')

// eslint-disable-next-line no-console
console.log(`${mockPath} created`)
