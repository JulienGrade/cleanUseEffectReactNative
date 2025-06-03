// Bonne pratique : traiter l'action directement dans le gestionnaire d'événement
// le compteur est incrémenté directement dans le gestionnaire onPress, de façon claire et immédiate.
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function RightEventHandler() {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <View style={styles.container}>
            <Button title="Incrémenter" onPress={handlePress} />
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
