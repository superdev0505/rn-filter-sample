// @flow

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import AppBar from 'components/AppBar'
import UserList from 'components/UserList'

import styles from './styles'

export default class UserSearch extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1876d2" />
        <AppBar />
        <UserList />
        <View style={styles.footer} />
      </View>
    )
  }
}
