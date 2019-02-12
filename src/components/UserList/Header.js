// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export { HEADER_HEIGHT } from './styles'

export default class HeaderComponent extends PureComponent<{}> {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Players</Text>

        <View style={styles.controls} />
      </View>
    )
  }
}
