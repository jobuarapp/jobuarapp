import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';

const JobuarerLoginScreen = (props) => {
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={70} style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.mainContainer}>
					<View>
						<Image source={require('../assets/default-user.png')} style={{ height: 150, width: 150 }} />
					</View>
					<View style={styles.loginTextContainer}>
						<Text>Login as</Text>
					</View>
					<View style={styles.headerMainBtnContainer}>
						<TouchableOpacity
							onPress={() => props.navigation.navigate('EmployerLogin')}
							style={{
								...styles.headerBtnContainer,
								...{ backgroundColor: Colors.white, borderWidth: 0.8, borderColor: Colors.mainBackg },
							}}
						>
							<Text style={{ ...styles.headerBtnTxt, ...{ color: Colors.mainBackg } }}>EMPLOYER</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.headerBtnContainer, ...{ backgroundColor: Colors.mainBackg } }}
						>
							<Text style={{ ...styles.headerBtnTxt, ...{ color: Colors.mainText } }}>JOBUARER</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.inputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Email" />
					</View>
					<View style={styles.inputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Password" />
					</View>
					<TouchableOpacity style={styles.loginBtnContainer}>
						<Text style={styles.loginBtnTxt}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.forgotPassContainer}>
						<Text style={styles.forgotPassTxt}>Forgot password?</Text>
					</TouchableOpacity>
					<View style={styles.noAccContainer}>
						<Text style={styles.noAccTxt}>Don't have an account? </Text>
						<TouchableOpacity>
							<Text style={styles.noAccSignupTxt}>SIGN UP</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export const JobuarerLoginScreenOptions = (navData) => {
	return {
		headerTitle: 'Login',
		// headerShown: false,
	};
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
	},
	loginTextContainer: {
		marginVertical: Dimensions.get('window').height * 0.035,
	},
	headerMainBtnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	headerBtnContainer: {
		marginHorizontal: Dimensions.get('window').width * 0.04,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.4,
		alignItems: 'center',
	},
	headerBtnTxt: {
		padding: 12,
		fontSize: 16,
		fontFamily: 'open-sans',
	},
	inputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginTop: Dimensions.get('window').height * 0.03,
	},
	loginBtnContainer: {
		backgroundColor: Colors.mainBackg,
		borderRadius: 25,
		width: Dimensions.get('window').width * 0.9,
		alignItems: 'center',
		marginVertical: Dimensions.get('window').height * 0.03,
	},
	loginBtnTxt: {
		color: Colors.mainText,
		padding: 15,
		fontSize: 16,
		fontFamily: 'open-sans-bold',
	},
	forgotPassContainer: { marginVertical: Dimensions.get('window').height * 0.02 },
	forgotPassTxt: { color: Colors.mainBackg, fontSize: 16, fontFamily: 'open-sans' },
	noAccContainer: {
		flexDirection: 'row',
		marginVertical: Dimensions.get('window').height * 0.009,
		alignItems: 'center',
	},
	noAccTxt: { color: Colors.mainBackg, fontSize: 16, fontFamily: 'open-sans' },
	noAccSignupTxt: { color: Colors.mainText, fontSize: 16, fontFamily: 'open-sans-bold' },
});

export default JobuarerLoginScreen;
