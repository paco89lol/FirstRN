'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'

//Icon
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

//Page
import WarrantyPageStackNavigator from './WarrantyPage'
import SearchPageStackNavigator from './SearchPage'
import ReceiptPageStackNavigator from './ReceiptPage'


export default createBottomTabNavigator(
  { WarrantyPage: 
    { screen: WarrantyPageStackNavigator, 
      navigationOptions: 
      { tabBarLabel: 'Warranty',
        tabBarIcon: ({tintColor}) => (
          <EntypoIcon name="text-document" color={tintColor} size={24} />
          )
      } 
    },
    SearchPage: 
    { screen: SearchPageStackNavigator,
      navigationOptions: 
      { tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <FontAwesomeIcon name="search" color={tintColor} size={24} />
          )
      }
    },
    ReceiptPage: 
    { screen: ReceiptPageStackNavigator,
      navigationOptions: 
      { tabBarLabel: 'Receipt',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcon name="food-variant" color={tintColor} size={24} />
          )
      }
    }
  }, {
    //option
    initialRouteName: 'SearchPage',
    tabBarOptions: 
    {
      activeTintColor: 'black',
      inactiveTintColor: 'grey'
    }
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});