// Mauvaise pratique : utiliser une fonction async directement dans useEffect
// déclare useEffect(async () => {...}) ce qui est invalide (et souvent silencieusement cassé).
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export function WrongAsyncEffect() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Ne PAS faire : useEffect ne doit pas être async directement
    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const json = await response.json();
        setData(json);
        setLoading(false);
    }, []);

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator /> : <Text>{data?.title}</Text>}
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