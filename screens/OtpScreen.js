import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import Colors from '../constants/Colors';
import OTPTextView from 'react-native-otp-textinput';

const OtpScreen = (props) => {
	const [otp, setOtp] = useState('');
	const [otpInput, setOtpInput] = useState('');
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
				</View>
				<View style={styles.verifyTxtContainer}>
					<Text style={styles.verifyTxt}>Verification code has been sent to you on your phone number</Text>
				</View>
				<OTPTextView
					ref={(e) => setOtp(e)}
					containerStyle={styles.textInputContainer}
					handleTextChange={(text) => setOtpInput(text)}
					inputCount={5}
					keyboardType="numeric"
					tintColor={Colors.mainText}
				/>
				<TouchableOpacity onPress={() => props.navigation.navigate('Otp')} style={styles.doneBtnContainer}>
					<Text style={styles.doneBtnTxt}>Done</Text>
				</TouchableOpacity>
				<View style={styles.verifyRSNDCodeContainer}>
					<Text style={styles.verifyTxt}>Didn't get verification code?</Text>
					<TouchableOpacity>
						<Text style={styles.verifyRSNDCodeTxt}>Resend</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export const OtpScreenOptions = (navData) => {
	return {
		headerTitle: 'Phone number verification',
		// headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
	logo: { height: 150, width: 150 },
	verifyTxtContainer: {
		marginHorizontal: Dimensions.get('window').width * 0.07,
	},
	verifyTxt: {
		color: Colors.inActive,
		fontSize: 14,
		fontFamily: 'poppins-regular',
		textAlign: 'center',
	},
	doneBtnContainer: {
		backgroundColor: Colors.mainBackg,
		borderRadius: 25,
		width: Dimensions.get('window').width * 0.9,
		alignItems: 'center',
		marginVertical: Dimensions.get('window').height * 0.02,
	},
	doneBtnTxt: {
		color: Colors.mainText,
		padding: 15,
		fontSize: 16,
		fontFamily: 'poppins-bold',
	},
	// verifyRSNDCodeContainer:{

	// },
	verifyRSNDCodeTxt: {
		color: Colors.inActive,
		fontSize: 16,
		fontFamily: 'poppins-bold',
		textAlign: 'center',
	},
});

export default OtpScreen;
