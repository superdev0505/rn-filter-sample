import React from 'react'
import renderer from 'react-test-renderer'

import Component from './index'

it('renders without crashing', () => {
  const user = {
    firstName: 'Anakin',
    lastName: 'Skywalker',
    index: 1,
    key: '1',
    pressed: false,
  }

  const tree = renderer.create(<Component item={user} />).toJSON()

  expect(tree).toMatchSnapshot()
})
