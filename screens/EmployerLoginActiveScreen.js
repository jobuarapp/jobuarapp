import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const EmployerLoginActiveScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text>Employer Login Active Screen</Text>
			<View
				style={{
					flex: 2,
					justifyContent: 'flex-end',
					// marginLeft: Dimensions.get('window').width * 0.7,
					marginRight: Dimensions.get('window').width * -0.75,
					bottom: Dimensions.get('window').height * 0.05,
				}}
			>
				<Ionicons name="ios-refresh-circle" size={55} color={Colors.mainText} />
			</View>
		</View>
	);
};

export const EmployerLoginActiveScreenOptions = (navData) => {
	return {
		tabBarLabel: 'Active',
		// headerShown: false,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Post a job" iconName="ios-add-circle" onPress={() => {}} />
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
});

export default EmployerLoginActiveScreen;
