import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Colors from './constants/Colors';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import NavigationScreen from './screenNavigator/NavigationScreen';
import * as SplashScreen from 'expo-splash-screen';
import LogoSplashScreen from './screens/LogoSplashScreen';
import Animated, { eq, cond, set, useCode } from 'react-native-reanimated';
import { withTimingTransition } from 'react-native-redash/lib/module/v1';
import { enableScreens } from 'react-native-screens';

enableScreens();

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
	const scale = useRef(new Animated.Value(0));
	const scaleAnimation = withTimingTransition(scale.current);

	useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);
	const [fontLoaded, setFontLoaded] = useState(false);
	const [appIsReady, setAppIsReady] = useState(false);

	const preventAutoHide = async () => {
		try {
			await SplashScreen.preventAutoHideAsync();
		} catch (e) {
			console.warn(e);
		}
		prepareResources();
	};

	useEffect(() => {
		setTimeout(() => {
			preventAutoHide();
		}, 3000);
	}, []);

	const prepareResources = async () => {
		try {
			setAppIsReady(true);
			await SplashScreen.hideAsync();
		} catch (err) {
			console.log(err.message);
		}
	};

	if (!appIsReady) {
		return (
			<View style={{ ...styles.splashScreen }}>
				<LogoSplashScreen scale={scaleAnimation} />
			</View>
		);
	}

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
	splashScreen: {
		flex: 1,
		backgroundColor: '#000000',
	},
});
