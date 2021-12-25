import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'
import Card from '../Card'
const GameOverScreen = (props) => {
    return (
        <View>
			<Card style={styles.card} >
				<Text style={{fontSize:23, textColor:'blue'}} >Game is Over</Text>
				<Text> Number of Rounds :  {props.numberOfRounds}</Text>
				<Text> Selected Number was :  {props.userNumber}</Text>
				<View style={styles.container} >
					<View style={styles.button} >
						<Button title="Restart" color='red'  onPress={ props.onRestart } />
					</View>
				</View>
			</Card>
		</View>
    )
}

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

export default GameOverScreen
