import React from 'react'
import renderer from 'react-test-renderer'

import Component from './index'

it('renders without crashing', () => {
  const tree = renderer.create(<Component />).toJSON()

  expect(tree).toBeTruthy()
})
