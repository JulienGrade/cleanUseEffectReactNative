// Bonne pratique : tout effet de bord va dans useEffect
// encapsule l’effet dans un useEffect avec un tableau vide ([]) pour qu’il s’exécute une seule fois au montage.
import React, { useEffect } from 'react';
import { View, Text, Alert as CleanAlert, StyleSheet } from 'react-native';

export function RightRenderEffect() {
    useEffect(() => {
        CleanAlert.alert('Info', 'Bienvenue dans le composant !');
    }, []);

    return (
        <View style={styles.container}>
            <Text>Comportement correct : effet géré proprement</Text>
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