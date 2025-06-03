// Mauvaise pratique : utiliser useEffect pour réinitialiser l'état lors d'un changement de prop
// utilise useEffect pour remettre à jour manuellement le state local quand la prop user change, ce qui est source de bugs et de comportements inattendus.
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export function WrongReset({ user }) {
    const [name, setName] = useState(user.name);

    useEffect(() => {
        setName(user.name); // met à jour manuellement, peut causer des bugs ou du flickering
    }, [user]);

    return (
        <View style={styles.container}>
            <Text>Nom :</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
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