// @flow

import { StyleSheet, StatusBar, Platform } from 'react-native'

import { isIphoneX } from 'utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1876d2',
    // paddingBottom: isIphoneX ? 30 : 0,

    paddingTop: Platform.select({
      ios: isIphoneX ? 30 : 18,
      android: StatusBar.currentHeight,
    }),
  },
  footer: {
    flex: 1,
    height: isIphoneX ? 30 : 0,
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
  },
})
