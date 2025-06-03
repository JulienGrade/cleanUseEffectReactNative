// Bonne pratique : utiliser useEffect pour initialiser au montage uniquement
// utilise useEffect avec tableau de dépendance vide [] pour exécuter l’alerte une seule fois au montage.
import React, { useEffect } from 'react';
import {Alert, View} from "react-native";

export function RightInitialization() {
    useEffect(() => {
        Alert.alert('Bienvenue !');
    }, []);

    return (
        <View style={styles.container}>
            <Text>Bienvenue sur l'app !</Text>
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