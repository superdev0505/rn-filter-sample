import React, { PureComponent } from 'react'
import { View, Picker, PickerItem } from 'react-native'

import styles from './styles'

type Props = {
  onReset: () => void,
  onChangeText: (filterGender: string) => void
};

type State = {
  filterGender: string
};

export default class FilterGenderPicker extends PureComponent<Props, State> {
  state = {
    filterGender: '',
  };

  onChange = filterGender => {
    this.setState({ filterGender })
    this.props.onChangeText(filterGender)
  };

  onReset = () => {
    this.setState({ filterGender: '' })
    this.props.onReset()
  };

  render() {
    return (
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={this.state.filterGender}
          onValueChange={this.onChange}
          style={styles.filterInput}
        >
          <PickerItem label="Gender" value="" />
          <PickerItem label="Male" value="Male" />
          <PickerItem label="Female" value="Female" />
        </Picker>
      </View>
    )
  }
}
