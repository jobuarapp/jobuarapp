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
	Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const FindJobSignupScreen = (props) => {
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={80} style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image source={require('../assets/jobuar-logo.jpg')} style={styles.logo} resizeMode="contain" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Full name" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Email" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Mobile number" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Password" />
					</View>
					<View style={{ marginHorizontal: Dimensions.get('window').width * 0.08 }}>
						<View style={styles.checkboxContainer}>
							<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
							<Text numberOfLines={2} style={styles.CheckboxTxt}>
								By clicking this box, i have read the Terms & conditions of the app.
							</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.signupBtnContainer}>
						<Text style={styles.signupBtnTxt}>Sign up</Text>
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
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
		// <KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={80} style={{ flex: 1 }}>
		// 	<ScrollView showsVerticalScrollIndicator={false}>
		// 		<View style={styles.container}>
		// 			{/* <View
		// 				style={{
		// 					height: 160,
		// 					width: 160,
		// 					backgroundColor: Colors.inActive,
		// 					borderRadius: 80,
		// 					justifyContent: 'center',
		// 					alignItems: 'center',
		// 					marginBottom: 25,
		// 				}}
		// 			>
		// 				<Image source={require('../assets/default-user.png')} style={{ height: 150, width: 150 }} />
		// 			</View>
		// 			<TouchableOpacity
		// 				style={{
		// 					elevation: 5,
		// 					top: Dimensions.get('window').height * -0.1,
		// 					right: Dimensions.get('window').width * -0.13,
		// 					backgroundColor: Colors.mainBackg,
		// 					borderRadius: 75,
		// 				}}
		// 			>
		// 				<Ionicons style={{ padding: 5 }} name="ios-camera" size={25} color={Colors.mainText} />
		// 			</TouchableOpacity> */}
		// 			<View style={styles.txtFieldInputContainer}>
		// 				<TextInput style={{ padding: 10 }} placeholder="Full name" />
		// 			</View>
		// 			<View style={styles.txtFieldInputContainer}>
		// 				<TextInput style={{ padding: 10 }} placeholder="Email" />
		// 			</View>
		// 			<View style={styles.txtFieldInputContainer}>
		// 				<TextInput style={{ padding: 10 }} placeholder="Mobile number" />
		// 			</View>
		// 			<View style={styles.txtFieldInputContainer}>
		// 				<TextInput style={{ padding: 10 }} placeholder="Password" />
		// 			</View>
		// 			{/* <View style={styles.txtFieldInputContainer}>
		// 				<TextInput style={{ padding: 10 }} placeholder="Referral (Optional)" />
		// 			</View> */}
		// 			<View style={styles.mainCheckboxContainer}>
		// 				{/* <View style={styles.checkboxContainer}>
		// 					<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
		// 					<Text numberOfLines={2}>I am over 18 years old.</Text>
		// 				</View>
		// 				<View style={styles.checkboxContainer}>
		// 					<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
		// 					<Text numberOfLines={2}>
		// 						I understand and acknowledge my CPF Medisave obligations as a self-employed person.
		// 					</Text>
		// 				</View>
		// 				<View style={styles.checkboxContainer}>
		// 					<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
		// 					<Text numberOfLines={2}>I am singapore citizen / Permanent resident.</Text>
		// 				</View> */}
		// 				<View style={styles.checkboxContainer}>
		// 					<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
		// 					<Text numberOfLines={2} style={{}}>
		// 						By clicking this box, i have read the Terms & conditions of the app.
		// 					</Text>
		// 				</View>
		// 			</View>
		// 			<TouchableOpacity style={styles.signupBtnContainer}>
		// 				<Text style={styles.signupBtnTxt}>Sign up</Text>
		// 			</TouchableOpacity>
		// 		</View>
		// 	</ScrollView>
		// </KeyboardAvoidingView>
	);
};

export const FindJobSignupScreenOptions = (navData) => {
	return {
		headerTitle: 'Sign Up',
		// headerShown: false,
	};
};

const styles = StyleSheet.create({
	mainContainer: { flex: 1, backgroundColor: Colors.white },
	container: {
		alignItems: 'center',
	},
	logo: { height: 150, width: 150 },
	txtFieldInputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginVertical: 10,
	},
	// mainCheckboxContainer: { marginHorizontal: Dimensions.get('window').width * 0.04 },
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: Dimensions.get('window').width * 0.02,
		marginVertical: 10,
	},
	CheckboxTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
	signupBtnContainer: {
		backgroundColor: Colors.mainBackg,
		borderRadius: 25,
		width: Dimensions.get('window').width * 0.9,
		alignItems: 'center',
		marginTop: Dimensions.get('window').height * 0.02,
		marginBottom: Dimensions.get('window').height * 0.05,
	},
	signupBtnTxt: {
		color: Colors.mainText,
		padding: 15,
		fontSize: 16,
		fontFamily: 'poppins-bold',
	},
	socialLoginMainContainer: { flexDirection: 'row', alignItems: 'center' },
	socialLoginBorderLine: {
		borderWidth: 0.8,
		height: 0.5,
		width: Dimensions.get('window').width,
		backgroundColor: Colors.inActive,
	},
	socialLoginTxtContainer: { marginHorizontal: Dimensions.get('window').width * 0.03 },
	socialLoginTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'poppins-regular' },
});

export default FindJobSignupScreen;
