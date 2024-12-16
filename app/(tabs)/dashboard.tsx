import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import Slider from '@react-native-community/slider';

const App: React.FC = () => {
	// 定义四个进度条的状态
	const [health, setHealth] = useState<number>(50);
	const [work, setWork] = useState<number>(50);
	const [entertainment, setEntertainment] = useState<number>(50);
	const [love, setLove] = useState<number>(50);

	// 动画效果，使用 Animated 组件
	const healthAnim = new Animated.Value(health);
	const workAnim = new Animated.Value(work);
	const entertainmentAnim = new Animated.Value(entertainment);
	const loveAnim = new Animated.Value(love);

	// 动画更新函数
	const updateSlider = (
		value: number,
		setState: React.Dispatch<React.SetStateAction<number>>,
		anim: Animated.Value
	) => {
		Animated.timing(anim, {
			toValue: value,
			duration: 200,
			useNativeDriver: false,
		}).start();
		setState(value);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>人生仪表盘</Text>

			<View style={styles.sliderContainer}>
				<Text style={styles.label}>健康</Text>
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={100}
					step={25} // 设置四个档位
					value={health}
					onValueChange={value => updateSlider(value, setHealth, healthAnim)}
					thumbTintColor='red'
					minimumTrackTintColor='red'
					maximumTrackTintColor='#FFCCCC'
				/>
				<Text style={styles.value}>{Math.round(health)}%</Text>
				<Animated.View
					style={[
						styles.animatedBar,
						{ width: `${health}%`, backgroundColor: 'red' },
					]}
				/>
			</View>

			<View style={styles.sliderContainer}>
				<Text style={styles.label}>工作</Text>
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={100}
					step={25}
					value={work}
					onValueChange={value => updateSlider(value, setWork, workAnim)}
					thumbTintColor='green'
					minimumTrackTintColor='green'
					maximumTrackTintColor='#CCFFCC'
				/>
				<Text style={styles.value}>{Math.round(work)}%</Text>
				<Animated.View
					style={[
						styles.animatedBar,
						{ width: `${work}%`, backgroundColor: 'green' },
					]}
				/>
			</View>

			<View style={styles.sliderContainer}>
				<Text style={styles.label}>娱乐</Text>
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={100}
					step={25}
					value={entertainment}
					onValueChange={value =>
						updateSlider(value, setEntertainment, entertainmentAnim)
					}
					thumbTintColor='blue'
					minimumTrackTintColor='blue'
					maximumTrackTintColor='#CCCCFF'
				/>
				<Text style={styles.value}>{Math.round(entertainment)}%</Text>
				<Animated.View
					style={[
						styles.animatedBar,
						{ width: `${entertainment}%`, backgroundColor: 'blue' },
					]}
				/>
			</View>

			<View style={styles.sliderContainer}>
				<Text style={styles.label}>爱</Text>
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={100}
					step={25}
					value={love}
					onValueChange={value => updateSlider(value, setLove, loveAnim)}
					thumbTintColor='purple'
					minimumTrackTintColor='purple'
					maximumTrackTintColor='#E0CCFF'
				/>
				<Text style={styles.value}>{Math.round(love)}%</Text>
				<Animated.View
					style={[
						styles.animatedBar,
						{ width: `${love}%`, backgroundColor: 'purple' },
					]}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFD1A', // 暖黄色背景色
		padding: 20,
		justifyContent: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 30,
		color: '#3E3E3E',
		fontFamily: 'Comic Sans MS', // 采用卡通风格的字体
	},
	sliderContainer: {
		marginBottom: 40,
		alignItems: 'center', // 确保内容居中显示
	},
	label: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 10,
		fontFamily: 'Comic Sans MS', // 使用卡通字体
		color: '#333333',
	},
	slider: {
		width: '80%',
		height: 40,
		marginHorizontal: 20,
		borderRadius: 20,
		overflow: 'hidden',
	},
	value: {
		fontSize: 18,
		fontWeight: '500',
		marginTop: 10,
		fontFamily: 'Comic Sans MS', // 卡通字体
		color: '#3E3E3E',
	},
	animatedBar: {
		height: 10,
		borderRadius: 5,
		marginTop: 10,
	},
});

export default App;
