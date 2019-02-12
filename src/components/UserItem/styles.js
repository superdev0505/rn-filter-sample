// @flow

import { StyleSheet } from 'react-native'

export const ITEM_HEIGHT = 94
const AVATAR_SIZE = 44

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    height: ITEM_HEIGHT,
  },
  avatar: {
    marginHorizontal: 16,
  },
  avatarContainer: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
  },

  infoContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
  },
  metaData: {
    color: '#a7a7a7',
  },

  dots: {
    width: 32,
    height: 32,
    marginLeft: 'auto',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
