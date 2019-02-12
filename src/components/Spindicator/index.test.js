import React from 'react'
import renderer from 'react-test-renderer'

import Component from './index'

it('renders without crashing', () => {
  const value = {
    interpolate: () => {},
  }

  const tree = renderer.create(<Component value={value} />).toJSON()

  expect(tree).toMatchSnapshot()
})
