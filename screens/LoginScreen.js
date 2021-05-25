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

const LoginScreen = (props) => {
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={0} style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
					</View>
					<View style={styles.inputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Email" />
					</View>
					<View style={styles.inputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Password" />
					</View>
					<TouchableOpacity
						onPress={() => props.navigation.navigate('EmpLoginTab')}
						style={styles.loginBtnContainer}
					>
						<Text style={styles.loginBtnTxt}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.forgotPassContainer}>
						<Text style={styles.forgotPassTxt}>Forgot password?</Text>
					</TouchableOpacity>
					<View style={styles.socialLoginMainContainer}>
						<View style={styles.socialLoginBorderLine} />
						<View style={styles.socialLoginTxtContainer}>
							<Text style={styles.socialLoginTxt}>Or login via</Text>
						</View>
						<View style={styles.socialLoginBorderLine} />
					</View>
					<View>
						<Text>Social Icons here: gmail, facebook, instagram</Text>
					</View>
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

export const LoginScreenOptions = (navData) => {
	return {
		headerTitle: 'Login',
		// headerShown: false,
	};
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	container: {
		alignItems: 'center',
	},
	// logoContainer: {
	// 	height: 160,
	// 	width: 160,
	// 	alignItems: 'center',
	// 	backgroundColor: Colors.mainBackg,
	// 	overflow: 'hidden',
	// 	borderRadius: 15,
	// 	marginTop: Dimensions.get('window').height * 0.03,
	// },
	logo: { height: 150, width: 150 },
	inputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginTop: Dimensions.get('window').height * 0.03,
	},
	inputTextField: { padding: 10 },
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
		fontFamily: 'poppins-bold',
	},
	forgotPassContainer: { marginVertical: Dimensions.get('window').height * 0.02 },
	forgotPassTxt: { color: Colors.mainBackg, fontSize: 16, fontFamily: 'poppins-regular' },
	socialLoginMainContainer: { flexDirection: 'row', alignItems: 'center' },
	socialLoginBorderLine: {
		borderWidth: 0.8,
		height: 0.5,
		width: Dimensions.get('window').width,
		backgroundColor: Colors.inActive,
	},
	socialLoginTxtContainer: { marginHorizontal: Dimensions.get('window').width * 0.03 },
	socialLoginTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	noAccContainer: {
		flexDirection: 'row',
		marginVertical: Dimensions.get('window').height * 0.009,
		alignItems: 'center',
	},
	noAccTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	noAccSignupTxt: { color: Colors.mainText, fontSize: 16, fontFamily: 'poppins-bold' },
});

export default LoginScreen;
