// Mauvaise pratique : effets de bord directement dans le rendu du composant
// affiche une alerte directement dans le corps du composant — elle se déclenche à chaque re-render.
import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

export function WrongRenderEffect() {
    // Problème : cette alerte sera appelée à chaque re-render
    Alert.alert('Attention', 'Ceci ne devrait pas être ici !');

    return (
        <View style={styles.container}>
            <Text>Comportement incorrect : alerte dans le render</Text>
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