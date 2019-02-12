// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export { HEADER_HEIGHT } from './styles'

export default class HeaderComponent extends PureComponent<{}> {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>All Users</Text>

        <View style={styles.controls}>
          <MaterialIcons name="view-module" size={24} color="#202020" />
          <MaterialIcons name="sort" size={24} color="#202020" />
          <MaterialIcons name="settings" size={24} color="#202020" />
          <MaterialIcons name="more-vert" size={24} color="#202020" />
        </View>
      </View>
    )
  }
}
