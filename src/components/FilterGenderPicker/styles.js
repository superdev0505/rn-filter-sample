// @flow

import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  filterContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    width: '50%',
  },
  searchIcon: {
    top: 16,
    position: 'absolute',
    marginLeft: 30,
  },
  filterInput: {
    marginVertical: Platform.select({ ios: 8, android: 0 }),
    marginRight: 24,
    fontSize: 16,
    flex: 1,
  },
})
