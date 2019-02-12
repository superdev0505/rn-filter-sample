// @flow

import React, { PureComponent } from 'react'
import { View, ViewPropTypes } from 'react-native'

import styles from './styles'

export { SEPARATOR_HEIGHT } from './styles'

type Props = {
  style?: ViewPropTypes.style,
}

export default class SeparatorComponent extends PureComponent<Props> {
  render() {
    return <View style={[this.props.style, styles.separator]} />
  }
}
