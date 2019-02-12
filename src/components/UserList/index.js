// @flow

import React, { PureComponent } from 'react'
import { Animated, FlatList, View } from 'react-native'
import debounce from 'lodash.debounce'

import type { USER } from 'core'
import { getFilteredUsers } from 'core'

import FilterGenderPicker from 'components/FilterGenderPicker'
import FilterSkillPicker from 'components/FilterSkillPicker'
import UserItem, { ITEM_HEIGHT } from 'components/UserItem'

import Header from './Header'
import Separator, { SEPARATOR_HEIGHT } from './Separator'

import styles from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

type State = {
  filterGender: string,
  filterSkill: string,
  data: Array<USER>
};

export default class UserList extends PureComponent<{}, State> {
  state = {
    filterGender: '',
    filterSkill: '',
    data: [],
  };

  componentDidMount() {
    this.getUsers()
  }

  async getUsers(
    filterGender?: string,
    filterSkill?: string,
    index?: number,
    data?: Array<USER>
  ) {
    const users = await getFilteredUsers(filterGender, filterSkill, index)

    this.setState({ data: (data || []).concat(users) })
  }

  getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    index,
    offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
  });

  onGenderSearch = (filterGender: string) => {
    this.setState({ filterGender })
    this.getUsers(filterGender, this.state.filterSkill)
  };
  onSkillSearch = (filterSkill: string) => {
    this.setState({ filterSkill })
    this.getUsers(this.state.filterGender, filterSkill)
  };

  onResetGender = () => this.onGenderSearch('');
  onResetGender = () => this.onSkillSearch('');

  onGenderSearchDebounced = debounce(this.onGenderSearch, 250, {
    trailing: true,
  });
  onSkillSearchDebounced = debounce(this.onSkillSearch, 250, {
    trailing: true,
  });

  onEndReached = () => {
    const { data } = this.state

    if (data.length >= 1000) {
      return
    }

    this.getUsers(
      this.state.filterGender,
      this.state.filterSkill,
      data.length,
      data
    )
  };

  renderSeparator = () => <Separator style={styles.itemSeparator} />;

  renderItem = ({ item }: { item: USER }) => <UserItem item={item} />;

  render() {
    const { data } = this.state

    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.userList}>
          <View style={styles.searchContainer}>
            <FilterGenderPicker
              onReset={this.onResetGender}
              onChangeText={this.onGenderSearchDebounced}
            />
            <FilterSkillPicker
              onReset={this.onResetSkill}
              onChangeText={this.onSkillSearchDebounced}
            />
          </View>

          <AnimatedFlatList
            data={data}
            getItemLayout={this.getItemLayout}
            ItemSeparatorComponent={this.renderSeparator}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always"
            onRefresh={this.getUsers}
            onEndReached={this.onEndReached}
            refreshing={false}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}
