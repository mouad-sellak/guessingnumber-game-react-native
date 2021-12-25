import React from 'react'
import { View,Text, StyleSheet } from 'react-native'


function Header(props) {
    return (
            <View style={styles.header}  >
                <Text style={styles.headerText} >{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        marginTop:36,
        backgroundColor: '#0080fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 25,
    }
})

export default Header
