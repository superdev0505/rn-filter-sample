// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import UserList from 'components/UserList'

import styles from './styles'

export default class UserSearch extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <UserList />
      </View>
    )
  }
}
