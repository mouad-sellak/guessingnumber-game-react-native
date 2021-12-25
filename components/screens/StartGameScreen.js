import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, TextInput, Button } from 'react-native'

const StartGameScreen = (props) => {

    const [entredValue, setEntredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const reset = () => {
        setEntredValue('')
        setConfirmed(false)
    }

    const confirm = () => {
        const chosenNumber = parseInt(entredValue)
        if ( isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber >= 99) {
            Alert.alert('Invalid Number', 'You should enter a number between 0 and 99 !')
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEntredValue('')
    }

    // const startGame = () => {
    //     return (
    //         <GameScreen />
    //     )
    // }

    let confirmedText

    if (confirmed) {
        confirmedText = (
            <View style={styles.screenView} >
                <Text> You selected </Text>
                <Text style={styles.selectedNumber} > {selectedNumber}</Text>
                <Button title='Start Game' onPress={ () => props.onStart(selectedNumber)} />
            </View>
        )
    }

    const inputHandler = input => {
        setEntredValue(input.replace(/[^0-9]/g, ''))
    }

    return (
        <View style={styles.screen} >
            <Text style={{ ...styles.title, fontSize: 20 }} >Start a New Game !</Text>
            <View style={styles.screenView} >
                <Text style={styles.title} >Select a number</Text>
                <TextInput
                    style={styles.inputText}
                    keyboardType='number-pad'
                    maxLength={2}
                    placeholder="Enter a number"
                    onChangeText={inputHandler}
                    value={entredValue}
                />
                <View style={styles.buttonsContainer} >
                    <View style={{ ...styles.button, shadowColor: 'red' }} >
                        <Button title="Reset" color="red" onPress={reset} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Confirm" onPress={confirm} />
                    </View>
                </View>
            </View>
            {confirmedText}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    screenView: {
        padding: 10,
        margin: 10,
        alignItems: 'center',
        maxWidth: '90%',
        borderRadius: 6,
        shadowColor: 'gray',
        shadowRadius: 9,
        shadowOpacity: 0.4,
        elevation: 2,
        borderColor: 'rgb(1,1,200)'
    },
    title: {
        fontSize: 15,
        marginVertical: 10,
    },
    inputText: {
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderColor: '#abcdff',
        borderRadius: 2,
        height: 35,
    },
    buttonsContainer: {
        padding: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
    },
    button: {
        width: '60%',
        margin: 5,
    },
    selectedNumber: {
        fontSize: 20,
        color: 'red'
    }
})

export default StartGameScreen
