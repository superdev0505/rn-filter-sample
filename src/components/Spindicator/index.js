// @flow

import React, { PureComponent } from 'react'
import { Animated, Text } from 'react-native'

type Props = {
  value: {
    interpolate: (config: Object) => void
  }
}

export default class Spindicator extends PureComponent<Props> {
  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              rotate: this.props.value.interpolate({
                inputRange: [0, 5000],
                outputRange: ['0deg', '360deg'],
                extrapolate: 'extend',
              }),
            },
          ],
        }}
      >
        <Text>🙃</Text>
      </Animated.View>
    )
  }
}
