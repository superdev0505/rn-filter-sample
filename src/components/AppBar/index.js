// @flow

import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export default class FilterInput extends PureComponent<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MaterialIcons
          name="menu"
          size={24}
          color="white"
          style={styles.menuIcon}
        />
        <Text style={styles.title}>Product Name</Text>
      </View>
    )
  }
}
