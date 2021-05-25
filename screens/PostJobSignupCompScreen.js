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

const PostJobSignupCompScreen = (props) => {
	return (
		<KeyboardAvoidingView enabled behavior="height" keyboardVerticalOffset={130} style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View
						style={{
							height: 160,
							width: 160,
							backgroundColor: Colors.inActive,
							borderRadius: 80,
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 25,
						}}
					>
						<Image source={require('../assets/default-user.png')} style={{ height: 150, width: 150 }} />
					</View>
					<TouchableOpacity
						style={{
							elevation: 5,
							top: Dimensions.get('window').height * -0.1,
							right: Dimensions.get('window').width * -0.13,
							backgroundColor: Colors.mainBackg,
							borderRadius: 75,
						}}
					>
						<Ionicons style={{ padding: 5 }} name="ios-camera" size={25} color={Colors.mainText} />
					</TouchableOpacity>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Full name" />
					</View>
					<View
						style={{
							borderColor: 'black',
							borderWidth: 0.8,
							borderRadius: 80,
							width: Dimensions.get('window').width * 0.9,
							marginVertical: 10,
						}}
					>
						<TextInput style={{ padding: 10 }} placeholder="Email" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Business name" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Company registration number" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Business address" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Postal code" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Mobile number" />
					</View>
					<View style={styles.txtFieldInputContainer}>
						<TextInput style={{ padding: 10 }} placeholder="Password" />
					</View>
					<View style={styles.mainCheckboxContainer}>
						<View style={styles.checkboxContainer}>
							<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
							<Text numberOfLines={2} style={styles.accTxt}>
								I am over 18 years old.
							</Text>
						</View>
						<View style={styles.checkboxContainer}>
							<Ionicons name="ios-checkbox" size={23} color={Colors.mainBackg} />
							<Text numberOfLines={2} style={styles.accTxt}>
								By clicking this box, i have read the Terms & conditions of the app.
							</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.signupBtnContainer}>
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

export const PostJobSignupCompScreenOptions = (navData) => {
	return {
		tabBarLabel: 'Company',
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
	txtFieldInputContainer: {
		borderColor: 'black',
		borderWidth: 0.8,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.9,
		marginVertical: 10,
	},
	mainCheckboxContainer: { marginHorizontal: Dimensions.get('window').width * 0.04 },
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
		fontFamily: 'open-sans-bold',
	},
	accContainer: {
		flexDirection: 'row',
		marginBottom: Dimensions.get('window').height * 0.05,
		alignItems: 'center',
	},
	accTxt: { color: Colors.mainBackg, fontSize: 14, fontFamily: 'open-sans' },
	accLoginTxt: { color: Colors.mainText, fontSize: 16, fontFamily: 'open-sans-bold' },
});

export default PostJobSignupCompScreen;
