import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';

export default props => {
    return(
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide' transparent={true} >
            <View style={styles.frame}>
                <View >
                    <Text style={styles.mainText}>BARBOSA'S</Text>
                    <Text style={styles.mainText}>MINE FIELD</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível:</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => props.onLevelSelected(0.1)} >
                        <Text style={styles.buttonLabel}>         Fácil         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={() => props.onLevelSelected(0.2)} >
                        <Text style={styles.buttonLabel}> Intermediário </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => props.onLevelSelected(0.3)} >
                        <Text style={styles.buttonLabel}>        Difícil        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}> 
                    <Text style={{padding: 15}}>*Após entrar na tela do jogo, selecione o nível clicando na bandeira Grande.</Text>
                    <Text>Version: 3.0.1</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#BBB',
        paddingTop: 60,
    },
    //rgb(110,110,110)
    container: {
        backgroundColor: '#CCC',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        borderRadius: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy : {
        backgroundColor: '#49b65d'
    },
    bgNormal : {
        backgroundColor: '#2765F7'
    },
    bgHard : {
        backgroundColor: '#F26337'
    },
    mainText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#222',
    }
})