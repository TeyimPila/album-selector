/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => {

	return (
		<View style={{ backgroundColor: 'white', flex: 1 }}>
			<Header headerText='Albums!'/>
			<AlbumList/>
		</View>
	)
};


AppRegistry.registerComponent('albums', () => App);
