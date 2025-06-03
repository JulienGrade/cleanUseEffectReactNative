// Mauvaise pratique : oubli de dépendances dans useEffect, ce qui crée des effets obsolètes
// oublie count dans le tableau de dépendances → double ne se met pas à jour correctement.
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function WrongDeps() {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    // L'effet utilise count mais il n'est PAS dans le tableau de dépendances
    useEffect(() => {
        setDouble(count * 2);
    }, []); // ← erreur ! count devrait être une dépendance

    return (
        <View style={styles.container}>
            <Text>Compteur : {count}</Text>
            <Text>Double : {double}</Text>
            <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
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