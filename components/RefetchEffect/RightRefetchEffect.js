import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function RightRefetchEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData().then(r => console.log(r)); // initial fetch au montage
    }, []);

    const fetchData = async () => {
        console.log('Fetching data...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json.slice(0, 3));
    };

    return (
        <View style={styles.container}>
            <Button title="Recharger les données" onPress={fetchData} />
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
