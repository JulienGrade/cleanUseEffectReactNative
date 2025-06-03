/*
Bonne pratique : dériver la donnée directement dans le render
Dérive directement la donnée dans le render, sans effet

Simple, lisible, prévisible
* */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function RightDerivedState() {
    const [name, setName] = useState('');

    // Bonne pratique : pas besoin de useEffect ici
    const greeting = name ? `Bonjour, ${name} !` : '';

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