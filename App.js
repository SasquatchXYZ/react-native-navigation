/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
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

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen')
    }
  };

  render() {

    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the Title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Details: DetailsScreen
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F4511E'
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

/*const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#000000'
      }
    },
    navigationOptions: {
      tabBarLabel: 'Home!'
    }
  }
);

const Tabs = createBottomTabNavigator({Home});*/

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}