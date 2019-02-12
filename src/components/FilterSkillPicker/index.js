import React, { PureComponent } from 'react'
import { View, Picker, PickerItem } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

type Props = {
  onReset: () => void,
  onChangeText: (filterGender: string) => void
};

type State = {
  filterSkill: string
};

export default class FilterSkillPicker extends PureComponent<Props, State> {
  state = {
    filterSkill: '',
  };

  onChange = (filterSkill, itemIndex) => {
    this.setState({ filterSkill })
    this.props.onChangeText(filterSkill)
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
          selectedValue={this.state.filterSkill}
          onValueChange={this.onChange}
          style={styles.filterInput}
        >
          <PickerItem label="Skill" value="" />
          <PickerItem label="Low" value="low" />
          <PickerItem label="Medium" value = "medium" />
          <PickerItem label="High" value = "high" />
        </Picker>
      </View>
    )
  }
}
