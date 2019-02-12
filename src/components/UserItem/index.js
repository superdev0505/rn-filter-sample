// @flow

import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import timeAgo from 'time-ago'
import Ripple from 'react-native-material-ripple'
import { MaterialIcons } from '@expo/vector-icons'

import type { USER } from 'core'

import styles from './styles'

export { ITEM_HEIGHT } from './styles'

type Props = {
  item: USER
};

export default class UserItem extends PureComponent<Props> {
  render() {
    const {
      item: {
        firstName, lastName, gender, lastLogin, skill,
      },
    } = this.props

    return (
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <MaterialIcons name="person" size={24} color="#707070" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.metaData} numberOfLines={1}>
            Gender: {gender}
          </Text>
          <Text style={styles.metaData} numberOfLines={1}>
            Skill: {skill}
          </Text>
          <Text style={styles.metaData}>
            Last Login: {timeAgo.ago(lastLogin)}
          </Text>
        </View>

        <Ripple
          rippleCentered
          rippleContainerBorderRadius={24}
          style={styles.dots}
        >
          <MaterialIcons name="more-vert" size={22} color="#757575" />
        </Ripple>
      </View>
    )
  }
}
