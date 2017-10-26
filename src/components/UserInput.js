import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
} from 'react-native';

export default class UserInput extends Component {
	render() {
		return (
			<View style={styles.inputWrapper}>
				<Image source={this.props.source}
					style={styles.inlineImg} />
				<TextInput style={styles.input}
					placeholder={this.props.placeholder}
					placeholderTextColor='gray'
					underlineColorAndroid='gray' />
			</View>
		);
	}
}

// UserInput.propTypes = {
// 	source: PropTypes.number.isRequired,
// 	placeholder: PropTypes.string.isRequired,
// 	secureTextEntry: PropTypes.bool,
// 	autoCorrect: PropTypes.bool,
// 	autoCapitalize: PropTypes.string,
// 	returnKeyType: PropTypes.string,
// };

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 160,
		height: 40,
		color: 'gray',
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});