import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const Height = Dimensions.get('window').height > 660;
const Width = Dimensions.get('window').width > 360;

const LogoSplashScreen = ({ scale }) => {
	return (
		<Animated.View
			style={{
				...styles.imageLogoContainer,
				transform: [
					{
						scale,
					},
				],
			}}
		>
			<Image source={require('../assets/jobuar-logo.png')} style={styles.imageLogo} resizeMode="contain" />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	imageLogoContainer: {
		flex: 1,
		// height: Height ? 50 : 50,
		// width: Width ? 800 : 770,
		// marginLeft: Width ? -215 : -205,
		marginHorizontal: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageLogo: {
		// height: Height ? "27%" : "27%",
		// width: Width ? "38%" : "38%",
		height: '100%',
		width: '100%',
	},
});

export default LogoSplashScreen;
