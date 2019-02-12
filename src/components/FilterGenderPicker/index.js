import React, { PureComponent } from 'react'
import { View, Picker, PickerItem } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

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

  onChange = (filterGender, itemIndex) => {
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
        <MaterialIcons name="search" size={24} style={styles.searchIcon} />

        <Picker
          selectedValue={this.state.filterGender}
          onValueChange={this.onChange}
          style={styles.filterInput}
        >
          <PickerItem label="Gender" value="" />
          <PickerItem label="Man" value="m" />
          <PickerItem label="Woman" value = "w" />
        </Picker>
      </View>
    )
  }
}
