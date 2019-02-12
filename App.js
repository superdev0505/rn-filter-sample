// @flow

import React, { Component } from 'react'
import { init } from 'core'
import UserSearch from 'screens/UserSearch'

init()

export default class App extends Component<{}> {
  render() {
    return <UserSearch />
  }
}
