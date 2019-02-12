// @flow

import { StyleSheet } from 'react-native'

export const HEADER_HEIGHT = 52
export const SEPARATOR_HEIGHT = 1

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  userList: {
    flexShrink: 1,
    marginTop: 8,
    marginBottom: 0,
    marginHorizontal: 8,
    backgroundColor: 'white',
    elevation: 2,
  },

  headerContainer: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#f5f5f5',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    paddingHorizontal: 8,
    marginRight: 'auto',
  },
  controls: {
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  separator: {
    height: SEPARATOR_HEIGHT,
    backgroundColor: '#e0e0e0',
  },
  itemSeparator: {
    marginLeft: 74,
  },

  emptyPlaceholder: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 14,
  },
})
