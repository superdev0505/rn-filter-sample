// @flow

import type { USER } from './types'
import users from './users.json'

// Emulate fetch returning Promise with resolved data
export const getFilteredUsers = (
  gender: string = '',
  skill: string='',
  index: number = 0
): Promise<Array<USER>> =>
  new Promise(resolve => {
    const regexpsgender = gender
      .split(' ')
      .map(word => new RegExp(String(word), 'i'))

    const genderFilteredData = users.filter(item =>
      regexpsgender.every(regex =>
        ['gender'].some(key =>
          regex.test(item[String(key)]))))
    
    const regexpsskill = skill
    .split(' ')
    .map(word => new RegExp(String(word), 'i'))
    
    const filteredData = users.filter(item =>
      regexpsskill.every(regex =>
        ['skill'].some(key =>
          regex.test(item[String(key)]))))

    resolve(filteredData.slice(index, index + 100))
  })
