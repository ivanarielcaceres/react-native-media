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

export default class SignUpStep2 extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			fullname: '',
			password: ''
        };
	}

	onPress(navigate, email, fullname) {
		//GOTO TO SIGNUP STEP2
		let password = this.state.password
		navigate('SignUpStep3', {'email': email, 'fullname': fullname, 'password': password})
	}

	render() {
		let email = this.props.navigation.state.params.email
		let fullname = this.props.navigation.state.params.fullname
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Wallpaper>
						<Logo />
						<View
							style={styles.inputContainer}>
							<TextInput style={styles.input}
								placeholder={'ENTER YOUR PASSWORD'}
								placeholderTextColor='gray'
								onChangeText={(password) => this.setState({'password': password})}
								underlineColorAndroid='gray' 
								secureTextEntry={true}/>
						</View>
						<View style={styles.buttons}>
							<TouchableOpacity style={styles.button}
								onPress={this.onPress.bind(this, navigate, email, fullname)}>
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