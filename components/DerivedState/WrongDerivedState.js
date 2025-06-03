/*
Mauvaise pratique : utiliser useEffect pour synchroniser un state dérivé
Utilise useEffect pour synchroniser un état dérivé (ce qui est inutile)

Risque : effets de bord inutiles, logique dupliquée, bugs en cascade
*/
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function WrongDerivedState() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    // Mauvaise pratique : utiliser useEffect pour déduire une valeur dérivée
    useEffect(() => {
        setGreeting(name ? `Bonjour, ${name} !` : '');
    }, [name]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrez votre nom"
                value={name}
                onChangeText={setName}
            />
            <Text>{greeting}</Text>
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