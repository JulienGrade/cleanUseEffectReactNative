import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function WrongRefetchEffect() {
    const [data, setData] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(0); // utilisé juste pour forcer le useEffect

    useEffect(() => {
        fetchData().then(r => console.log(r)); // appelé à cause d’un state sans vraie raison logique
    }, [refreshTrigger]);

    const fetchData = async () => {
        console.log('Fetching data...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json.slice(0, 3)); // simule réponse courte
    };

    return (
        <View style={styles.container}>
            <Button title="Recharger les données" onPress={() => setRefreshTrigger(t => t + 1)} />
            <Text style={styles.title}>Posts :</Text>
            {data.map(post => (
                <Text key={post.id}>{post.title}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16,
    },
    item: {
        paddingVertical: 5,
    },
});