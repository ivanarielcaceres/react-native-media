import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.jpg';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: 'https://www.rust-lang.org/logos/rust-logo-256x256-blk.png'}} style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		marginTop: 100,
		width: 120,
		height: 120,
	}
});
