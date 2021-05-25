import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const MainScreen = (props) => {
	const carousel = useRef();
	const [activeIndex, setActiveIndex] = useState(0);
	const [WallPaper, setWallPaper] = useState();
	const [carouselItems, setCarouselItems] = useState([
		{
			img: require('../assets/jobuar-wall01.jpg'),
		},
		{
			img: require('../assets/jobuar-wall02.jpg'),
		},
		{
			img: require('../assets/jobuar-wall03.jpg'),
		},
	]);

	const renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					borderRadius: 15,
					overflow: 'hidden',
					height: Dimensions.get('window').height,
					width: Dimensions.get('window').width,
				}}
			>
				<Image
					style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
					source={item.img}
					resizeMode="cover"
				/>
			</View>
		);
	};

	// const Pagination = () => {
	// 	return (
	// 		<Pagination
	// 			dotsLength={carouselItems.length}
	// 			activeDotIndex={activeIndex}
	// 			containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
	// 			dotStyle={{
	// 				width: 10,
	// 				height: 10,
	// 				borderRadius: 5,
	// 				marginHorizontal: 8,
	// 				backgroundColor: 'rgba(255, 255, 255, 0.92)',
	// 			}}
	// 			inactiveDotStyle={
	// 				{
	// 					// Define styles for inactive dots here
	// 				}
	// 			}
	// 			inactiveDotOpacity={0.4}
	// 			inactiveDotScale={0.6}
	// 		/>
	// 	);
	// };

	return (
		<View style={styles.container}>
			<Carousel
				ref={carousel}
				layout={'stack'}
				data={carouselItems}
				sliderWidth={Dimensions.get('window').width}
				sliderHeight={Dimensions.get('window').height}
				itemWidth={Dimensions.get('window').width}
				itemHeight={Dimensions.get('window').height}
				renderItem={renderItem}
				onSnapToItem={(index) => setWallPaper({ activeIndex: index })}
				loop={true}
				autoplay={true}
				enableMomentum={false}
				lockScrollWhileSnapping={true}
				autoplayInterval={2000}
				autoplayDelay={3000}
				removeClippedSubviews={false}
				slideStyle={{ flex: 1 }}
			/>
			{/* <Pagination /> */}
			{/* <View>
				<Pagination
					dotsLength={3}
					containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 5,
						marginHorizontal: 8,
						backgroundColor: 'rgba(255, 255, 255, 0.92)',
					}}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
					activeDotIndex={activeIndex}
				/>
			</View> */}
			<View style={styles.bottomBtnMainContainer}>
				<View style={styles.signupJobBtnMainContainer}>
					<TouchableOpacity
						onPress={() => props.navigation.navigate('FindJobSignup')}
						style={styles.SignupJobBtnContainer}
					>
						<Text style={styles.signupJobBtnTxt}>Find a job</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => props.navigation.navigate('PostJobSignupInd')}
						style={styles.SignupJobBtnContainer}
					>
						<Text style={styles.signupJobBtnTxt}>Post a job</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.loginBtnMainContainer}>
					<Text style={styles.loginBtnDefaultTxt}>Already a member?</Text>
					<TouchableOpacity
						onPress={() => props.navigation.navigate('Login')}
						style={styles.loginBtnContainer}
					>
						<Text style={styles.loginBtnTxt}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export const screenOptions = (navData) => {
	return {
		headerTitle: '',
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.white,
		position: 'absolute',
	},
	bottomBtnMainContainer: {
		bottom: Dimensions.get('window').height * 0.22,
		// bottom: Dimensions.get('window').height * 0.32,
	},
	signupJobBtnMainContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		bottom: Dimensions.get('window').height * 0.04,
	},
	SignupJobBtnContainer: {
		backgroundColor: Colors.mainBackg,
		marginHorizontal: Dimensions.get('window').width * 0.04,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.4,
		alignItems: 'center',
	},
	signupJobBtnTxt: { color: Colors.mainText, padding: 12, fontSize: 14, fontFamily: 'poppins-regular' },
	loginBtnMainContainer: {
		flexDirection: 'row',
		// bottom: Dimensions.get('window').height * 0.12,
		backgroundColor: '#777',
		marginHorizontal: 25,
		borderRadius: 80,
		width: Dimensions.get('window').width * 0.8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginBtnDefaultTxt: { color: '#fff', padding: 15, fontSize: 12, fontFamily: 'poppins-regular' },
	loginBtnContainer: {
		backgroundColor: Colors.mainText,
		borderRadius: 10,
	},
	loginBtnTxt: { color: Colors.mainBackg, padding: 8, fontSize: 14, fontFamily: 'poppins-regular' },
});

export default MainScreen;
