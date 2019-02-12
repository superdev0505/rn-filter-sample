import allUsers from './users.json'
import { getFilteredUsers } from './mock'

describe('getFilteredUsers', () => {
  it('retrun 100 users by default', async () => {
    const users = await getFilteredUsers()
    const user = users[0]

    expect(users.length).toBe(100)

    expect(user).toHaveProperty('key')
    expect(user).toHaveProperty('gender')
    expect(user).toHaveProperty('skill')
    expect(user).toHaveProperty('lastLogin')
    expect(user).toHaveProperty('index')
    expect(user).toHaveProperty('firstName')
    expect(user).toHaveProperty('lastName')
  })

  it('filters users with provided string', async () => {
    const users = await getFilteredUsers('Bob')

    expect(users.length).toBe(1)
  })

  it('slices users from provided index', async () => {
    const users = await getFilteredUsers('', 100)

    expect(users).toEqual(allUsers.slice(100, 200))
  })
})
