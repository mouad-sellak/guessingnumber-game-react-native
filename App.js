import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react'
import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';

export default function App() {


  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const configureNewGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  const startGameHndler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStart={startGameHndler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} numberOfRounds={guessRounds} onRestart={configureNewGame}  />
  }

  return (
    <View style={styles.screen} >
      <Header title="Guessing Number Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
