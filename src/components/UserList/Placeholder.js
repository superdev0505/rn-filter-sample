/* eslint-disable react/no-unescaped-entities */
// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class EmptyPlaceholder extends PureComponent<{}> {
  render() {
    return (
      <View style={styles.emptyPlaceholder}>
        <Text style={styles.placeholderText}>
          These aren't the Droids you're looking for...
        </Text>
      </View>
    )
  }
}
