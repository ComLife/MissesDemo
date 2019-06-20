import React, { Component } from 'react';
import { 
	SafeAreaView,
	Text, 
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { width, isIPhoneX } from '../configs/Device';

export default class Detail extends Component {
	static navigationOptions = ({navigation}) => {
		const { params } = navigation.state;
		return {
			headerTitle: params ? params.title : '百思不得姐',
		}
	};

	render() {
		const { navigation } = this.props;
		return (
			<SafeAreaView style={styles.container}>
				<Text>详情</Text>
				<TouchableOpacity 
					style={styles.button}
					activeOpacity={0.7}
					onPress={() => navigation.goBack()}
					>
					<Text>返回</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
	};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width,
		height: 50,
		position: 'absolute',
		bottom: 0,
		alignSelf: 'flex-end',
		marginBottom: isIPhoneX ? 34 : 0,
		backgroundColor:'#fff',
		justifyContent: 'center', 
		alignItems: 'center', 
	}
})