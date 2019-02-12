// @flow

export function init() {
  if (process.env.NODE_ENV === 'development') {
    // $FlowFixMe
    console.disableYellowBox = true // eslint-disable-line no-console
  }
}
