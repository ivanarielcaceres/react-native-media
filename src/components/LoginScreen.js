import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
// import SignupSection from './SignupSection';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
    TouchableOpacity
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';

export default class LoginScreen extends Component {

	constructor() {
		super()
		this.state = {
            useremail: '',
        };
	}

	onPress(navigate) {
		let userEmail = this.state.useremail
		let userValid = this.validateUser(userEmail)
		userValid ? navigate('SecondScreen', {'email' : userEmail}) : navigate('SignUp', {'email': userEmail})
	}

    validateUser(username) {
		if (username == 'user1') {
			return true
		}
		return false
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Wallpaper>
						<Logo />
						<View
							style={styles.inputContainer}>
							<TextInput style={styles.input}
								placeholder={'ENTER YOUR EMAIL'}
								placeholderTextColor='gray'
								onChangeText={(useremail) => this.setState({'useremail': useremail})}
								underlineColorAndroid='gray' />
						</View>
						<View style={styles.buttons}>
							<TouchableOpacity style={styles.button}
								onPress={this.onPress.bind(this, navigate)}>
								<Text style={styles.text}>Next</Text>
							</TouchableOpacity>
						</View>
				</Wallpaper>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 190,
		height: 40,
		color: 'gray',
	}, inputContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}, button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000000',
		height: 30,
		width: 80,
		borderRadius: 10,
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}, text: {
		color: 'white',
		backgroundColor: 'transparent',
	}
	
});