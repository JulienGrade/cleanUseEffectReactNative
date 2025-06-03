// Mauvaise pratique : abonner un listener sans le désabonner
// ajoute des listeners sans les retirer, ce qui provoque des fuites mémoire et des appels multiples inattendus.
import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard as RNKeyboard, StyleSheet } from 'react-native';

export function WrongSubscription() {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        RNKeyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        RNKeyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    }, []);

    return (
        <View style={styles.container}>
            <Text>Clavier visible : {keyboardVisible ? 'Oui' : 'Non'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});