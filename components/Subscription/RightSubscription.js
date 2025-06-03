// Bonne pratique : désabonnement propre des listeners clavier
// ajoute les listeners dans useEffect et les nettoie proprement dans le return (clean-up function).
import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard as Key, StyleSheet } from 'react-native';

export function RightSubscription() {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSub = Key.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Key.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        return () => {
            showSub.remove();
            hideSub.remove();
        };
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