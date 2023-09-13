const { faker } = require('@faker-js/faker')

class UsersServices {

  constructor() {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 100
    for (let i = 0; i <= limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        sex: faker.person.sex(),
        bio: faker.person.bio(),
      })
    }
  }

  create() {

  }

  find() {
    return this.users
  }

  findOne(id) {
    return this.users.find(item => item.id === id)
  }

  update() {
    
  }

  delete() {

  }

}

module.exports = UsersServices
