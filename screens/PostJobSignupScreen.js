import React, { useRef, useState } from 'react';
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
import PhoneInput from 'react-native-phone-number-input';

const PostJobSignupScreen = (props) => {
	const [phone, setPhone] = useState('');
	const phoneInput = useRef(null);
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={80} style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Full name*" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Email*" />
					</View>
					{/* <View style={styles.txtFieldInputContainer}> */}
					{/* <TextInput style={styles.inputTextField} placeholder="Mobile number*" /> */}
					{/* </View> */}
					<PhoneInput
						placeholder="Mobile Number"
						// onChangeText={(phone) => setPhone(phone)}
						textContainerStyle={{
							backgroundColor: 'transparent',
						}}
						containerStyle={{
							...styles.txtFieldInputContainer,
							...{ height: Platform.OS === 'android' ? 50 : 45 },
						}}
						textInputStyle={{
							color: Colors.mainBackg,
							fontSize: 14,
							fontFamily: 'poppins-regular',
							alignItems: 'center',
							top: Platform.OS === 'ios' ? 1 : 0,
						}}
						ref={phoneInput}
						defaultValue={phone}
						defaultCode="SG"
						onChangeFormattedText={(phone) => {
							setPhone(phone);
						}}
						codeTextStyle={{ color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' }}
						// withDarkTheme
						// withShadow
						// autoFocus
					/>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={styles.inputTextField} placeholder="Password*" />
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
					<View style={styles.socialLoginMainContainer}>
						<View style={styles.socialLoginBorderLine} />
						<View style={styles.socialLoginTxtContainer}>
							<Text style={styles.socialLoginTxt}>Or login via</Text>
						</View>
						<View style={styles.socialLoginBorderLine} />
					</View>
					<View style={{ marginBottom: Dimensions.get('window').height * 0.03 }}>
						<Text>Social Icons here: gmail, facebook, instagram</Text>
					</View>
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
	logoContainer: {
		height: 140,
		width: 140,
		alignItems: 'center',
		backgroundColor: Colors.mainBackg,
		overflow: 'hidden',
		borderRadius: 15,
		marginTop: Dimensions.get('window').height * 0.03,
	},
	logo: { height: 130, width: 130 },
	txtFieldInputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginVertical: 10,
	},
	inputTextField: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular', padding: 10 },
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
	socialLoginMainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: Dimensions.get('window').height * 0.03,
	},
	socialLoginBorderLine: {
		borderWidth: 0.8,
		height: 0.5,
		width: Dimensions.get('window').width,
		backgroundColor: Colors.inActive,
	},
	socialLoginTxtContainer: { marginHorizontal: Dimensions.get('window').width * 0.03 },
	socialLoginTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	accContainer: {
		flexDirection: 'row',
		marginBottom: Dimensions.get('window').height * 0.05,
		alignItems: 'center',
	},
	accTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	accLoginTxt: { color: Colors.mainText, fontSize: 16, fontFamily: 'poppins-bold' },
});

export default PostJobSignupScreen;
