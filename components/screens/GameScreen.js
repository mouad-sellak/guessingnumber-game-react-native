import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button,StyleSheet, Alert } from "react-native";
import Card from "../Card";


const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};




const GameScreen = (props) => {

	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, props.userChoice)
	);

	const currentLow=useRef(1)
	const currentHigh=useRef(100)

	const [rounds,setRounds]=useState(6)

	useEffect(()=>{
		if(currentGuess===props.userChoice){
			props.onGameOver(rounds)
		}
	}, [currentGuess, props.userChoice, props.onGameOver])


	const nextGuess = (direction) => {
		if (  (direction==='lower' && currentGuess < props.userChoice) || (direction==='greater' && currentGuess > props.userChoice)  ){
			Alert.alert('Don\'lt lie ', 'You know that is wrong...')
			return
		}
		if(direction==='lower'){
			currentHigh.current=currentGuess
		}
		else{
			currentLow.current=currentGuess
		}
		const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
		setCurrentGuess(nextNumber)
		setRounds(rounds+1)
	}
	
	

	return (
		<View>
			<Card style={styles.card} >
				<Text>Opponent's Guess</Text>
				<Text style={{fontSize:25}} >{currentGuess}</Text>
				<View style={styles.container} >
					<View style={styles.button} >
						<Button title="Lower"  onPress={ nextGuess.bind(this, 'lower')} />
					</View>
					<View style={styles.button} >
						<Button title="Greater" onPress={ nextGuess.bind(this, 'greater') } />
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	button:{
		width: '30%',
		margin:10,
	},
	card:{
		marginTop:60,
	}
})

export default GameScreen;
