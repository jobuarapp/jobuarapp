import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const PostJobSignupScreen = (props) => {
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={80} style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Full name" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Email" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Mobile number" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Password" />
					</View>
					<View style={{ marginHorizontal: Dimensions.get('window').width * 0.08 }}>
						<View style={styles.checkboxContainer}>
							<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
							<Text numberOfLines={2} style={styles.accTxt}>
								By clicking this box, i have read the Terms & conditions of the app.
							</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => props.navigation.navigate('Otp')}
						style={styles.signupBtnContainer}
					>
						<Text style={styles.signupBtnTxt}>Sign up</Text>
					</TouchableOpacity>
					<View style={styles.accContainer}>
						<Text style={styles.accTxt}>Already have an account? </Text>
						<TouchableOpacity>
							<Text style={styles.accLoginTxt}>LOGIN</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export const PostJobSignupScreenOptions = (navData) => {
	return {
		headerTitle: 'Sign Up',
		// headerShown: false,
	};
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	container: { alignItems: 'center' },
	logo: { height: 150, width: 150 },
	txtFieldInputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginVertical: 10,
	},
	inputTextField: { padding: 10 },
	// mainCheckboxContainer: { marginHorizontal: Dimensions.get('window').width * 0.04 },
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: Dimensions.get('window').width * 0.02,
		marginVertical: 10,
	},
	signupBtnContainer: {
		backgroundColor: Colors.mainBackg,
		borderRadius: 25,
		width: Dimensions.get('window').width * 0.9,
		alignItems: 'center',
		marginVertical: Dimensions.get('window').height * 0.02,
	},
	signupBtnTxt: {
		color: Colors.mainText,
		padding: 15,
		fontSize: 16,
		fontFamily: 'poppins-bold',
	},
	accContainer: {
		flexDirection: 'row',
		marginBottom: Dimensions.get('window').height * 0.05,
		alignItems: 'center',
	},
	accTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	accLoginTxt: { color: Colors.mainText, fontSize: 16, fontFamily: 'poppins-bold' },
});

export default PostJobSignupScreen;
