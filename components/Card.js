import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }} >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
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
})

export default Card
