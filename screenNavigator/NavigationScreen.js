import React from 'react';
import { Text, Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import MainScreen, { screenOptions } from '../screens/MainScreen';
import FindJobSignupScreen, { FindJobSignupScreenOptions } from '../screens/FindJobSignupScreen';
import PostJobSignupCompScreen, { PostJobSignupCompScreenOptions } from '../screens/PostJobSignupCompScreen';
import PostJobSignupScreen, { PostJobSignupScreenOptions } from '../screens/PostJobSignupScreen';
// import JobuarerLoginScreen, { JobuarerLoginScreenOptions } from '../screens/JobuarerLoginScreen';
import LoginScreen, { LoginScreenOptions } from '../screens/LoginScreen';
import EmployerLoginPendingScreen, { EmployerLoginPendingScreenOptions } from '../screens/EmployerLoginPendingScreen';
import EmployerLoginActiveScreen, { EmployerLoginActiveScreenOptions } from '../screens/EmployerLoginActiveScreen';
import OtpScreen, { OtpScreenOptions } from '../screens/OtpScreen';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.mainBackg : Colors.white,
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans',
	},
	headerTintColor: Colors.mainText,
};

const StackNavigator = createStackNavigator();

const Tabs = createMaterialTopTabNavigator();

// const LoginSignupTabScreen = (props) => {
// 	return (
// 		<Tabs.Navigator
// 			tabBarOptions={{
// 				labelStyle: { fontSize: 16, fontFamily: 'open-sans', color: Colors.mainText },
// 				// tabStyle: { width: 100 },
// 				style: { backgroundColor: Colors.mainBackg },
// 				indicatorStyle: { backgroundColor: Colors.mainText },
// 			}}
// 		>
// 			<Tabs.Screen
// 				name="PostJobSignupComp"
// 				component={PostJobSignupCompScreen}
// 				options={PostJobSignupCompScreenOptions}
// 			/>
// 			<Tabs.Screen
// 				name="PostJobSignupIndScreen"
// 				component={PostJobSignupIndScreen}
// 				options={PostJobSignupIndScreenOptions}
// 			/>
// 		</Tabs.Navigator>
// 	);
// };

const EmpLoginTabScreen = (props) => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				labelStyle: { fontSize: 16, fontFamily: 'open-sans', color: Colors.mainText },
				// tabStyle: { width: 100 },
				style: { backgroundColor: Colors.mainBackg },
				indicatorStyle: { backgroundColor: Colors.mainText },
			}}
		>
			<Tabs.Screen
				name="EmployerLoginPending"
				component={EmployerLoginPendingScreen}
				options={EmployerLoginPendingScreenOptions}
			/>
			<Tabs.Screen
				name="EmployerLoginActive"
				component={EmployerLoginActiveScreen}
				options={EmployerLoginActiveScreenOptions}
			/>
		</Tabs.Navigator>
	);
};

// const EmpLoginDrawerScreen = (props) => {
// 	<Drawer.Navigator initialRouteName="EmployerLoginPending">
//         <Drawer.Screen name="EmployerLoginPending" component={EmployerLoginPendingScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
// }

const MainStackNavigation = (props) => {
	return (
		<StackNavigator.Navigator screenOptions={defaultNavOptions}>
			<StackNavigator.Screen name="Main" component={MainScreen} options={screenOptions} />
			<StackNavigator.Screen
				name="FindJobSignup"
				component={FindJobSignupScreen}
				options={FindJobSignupScreenOptions}
			/>
			<StackNavigator.Screen
				name="PostJobSignupInd"
				component={PostJobSignupScreen}
				options={PostJobSignupScreenOptions}
			/>
			<StackNavigator.Screen name="Otp" component={OtpScreen} options={OtpScreenOptions} />
			{/* <StackNavigator.Screen
				name="LoginSignupTab"
				component={LoginSignupTabScreen}
				options={{ headerTitle: 'Sign Up' }}
			/> */}
			{/* <StackNavigator.Screen name="PostJobSignupComp" component={PostJobSignupCompScreen} />
				<StackNavigator.Screen name="PostJobSignupInd" component={PostJobSignupIndScreen} /> */}
			{/* <StackNavigator.Screen
				name="JobuarerLogin"
				component={JobuarerLoginScreen}
				options={JobuarerLoginScreenOptions}
			/> */}
			<StackNavigator.Screen name="Login" component={LoginScreen} options={LoginScreenOptions} />
			<StackNavigator.Screen
				name="EmpLoginTab"
				component={EmpLoginTabScreen}
				options={{
					headerTitle: 'Home',
					headerRight: (props) => (
						// <Ionicons name="ios-add-circle" size={25} color={Colors.mainText} />
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<View style={{}}>
								<Item title="Post a job" iconName="ios-add-circle" onPress={() => {}} />
								<Text style={{ fontFamily: 'open-sans', fontSize: 12, color: Colors.mainBackg }}>
									Post a job
								</Text>
							</View>
						</HeaderButtons>
					),
				}}
			/>
		</StackNavigator.Navigator>
	);
};

const NavigationScreen = (props) => {
	return (
		<NavigationContainer>
			<MainStackNavigation />
		</NavigationContainer>
	);
};

export default NavigationScreen;
