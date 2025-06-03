// Mauvaise pratique : utiliser useEffect pour réagir à un événement utilisateur
// utilise useEffect pour réagir à un clic, ce qui est inutilement complexe et source de bugs.
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function WrongEventHandler() {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    // ❌ Mauvaise pratique : utiliser useEffect pour détecter un clic et modifier un état
    useEffect(() => {
        if (clicked) {
            setCount((c) => c + 1);
            setClicked(false);
        }
    }, [clicked]);

    return (
        <View style={styles.container}>
            <Button title="Incrémenter" onPress={() => setClicked(true)} />
            <Text>Compteur : {count}</Text>
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
