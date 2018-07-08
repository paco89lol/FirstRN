//SearchPage.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Ads from './Ads';

class SearchPage extends React.Component {
	render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text>SearchPage</Text>
        </View>

        <View>
        	<Ads/>
        </View>
      </View>
    );
  }
}

const SearchPageStackNavigator = createStackNavigator(
	{ SearchPage:
		{ screen: SearchPage,
			navigationOptions: ({navigation}) => (
				{ title: 'Search' }
			)
		}
	}
);

//Export
export default SearchPageStackNavigator;

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
