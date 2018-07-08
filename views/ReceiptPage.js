//ReceiptPage.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Ads from './Ads';

class ReceiptPage extends React.Component {
	render() {
	  	return (
				<View style={styles.body}>
	        <View style={styles.container}>
	          <Text>ReceiptItemsPage</Text>
	        </View>
	        <View>
	          <Ads/>
	        </View>
	      </View>
	    );
  	}
}

const ReceiptPageStackNavigator = createStackNavigator(
	{ ReceiptPage:
		{ screen: ReceiptPage,
			navigationOptions: ({navigation}) => (
				{ title: 'Receipt' }
			)
		}
	}
);

//Export
export default ReceiptPageStackNavigator;

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
