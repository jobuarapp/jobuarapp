import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Colors from './constants/Colors';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import NavigationScreen from './screenNavigator/NavigationScreen';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
	});
};

const handleLoadingError = (error) => {
	// In this case, you might want to report the error to your error
	// reporting service, for example Sentry
	console.warn(error);
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={handleLoadingError} />;
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* <View style={styles.container}> */}
			<NavigationScreen />
			<StatusBar translucent={false} style={Platform.OS === 'android' ? 'light' : 'auto'} />
			{/* </View> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
