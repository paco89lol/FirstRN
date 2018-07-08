//WarrantyPage.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Ads from './Ads';

class WarrantyPage extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text>WarrantyItemsPage</Text>
        </View>
        <View>
          <Ads/>
        </View>
      </View>
    );
  }
}

const WarrantyPageStackNavigator = createStackNavigator(
	{ WarrantyPage:
		{ screen: WarrantyPage,
			navigationOptions: ({navigation}) => (
				{ title: 'Warranty' }
			)
		}
	}
);

//Export
export default WarrantyPageStackNavigator;

//Style
const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
