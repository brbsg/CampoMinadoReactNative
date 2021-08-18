import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Flag from './Flag'

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    {/* <Text>Clique na Bandeira:</Text> */}
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
            </View>

            <View>
                <Text> {props.onChangeTimer} </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#BBB',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
        padding: 10
    },
    flagButton:{
        marginTop: 10,
        minWidth: 20
    },
    flagsLeft: {
       fontSize: 30,
       fontWeight: 'bold',
       paddingTop: 5,
       marginLeft: 20 
    },
    button: {
        backgroundColor: '#555',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color : '#DDD',
        fontWeight: 'bold'
    }
})