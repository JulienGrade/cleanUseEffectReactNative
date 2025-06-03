// Bonne pratique : définir une fonction async à l'intérieur de useEffect
// définit une fonction async à l’intérieur de l’effet, puis l’appelle normalement.
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export function RightAsyncEffect() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Erreur API :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(r => console.log(r));
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