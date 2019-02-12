// @flow

import React, { PureComponent } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'

import styles from './styles'

export default class ActionButton extends PureComponent<{}> {
  render() {
    return (
      <Ripple
        style={styles.actionButton}
        rippleCentered
        rippleContainerBorderRadius={30}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </Ripple>
    )
  }
}
