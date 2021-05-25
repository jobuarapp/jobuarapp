import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const OtpScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
			</View>
			<View style={styles.verifyTxtContainer}>
				<Text style={styles.verifyTxt}>Verification code has been sent to you on your phone number</Text>
			</View>
		</View>
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
});

export default OtpScreen;
