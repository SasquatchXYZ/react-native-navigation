import {Button, Text, View} from 'react-native';
import React, {Component} from 'react';
import LogoTitle from '../components/LogoTitle';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <LogoTitle/>,
      headerRight: (
        <Button
          title="+1"
          onPress={navigation.getParam('increaseCount')}
          color="black"
        />
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount})
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'For Science!'
            })
          }}
        />
      </View>
    )
  }
}