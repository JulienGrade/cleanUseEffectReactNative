// Bonne pratique : déclenchement direct de l'effet dans le handler utilisateur
// déclenchement direct de l’effet dans le handler utilisateur.
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function RightTriggerEffect() {
    const [filter, setFilter] = useState('all');
    const [data, setData] = useState([]);

    const handleFilter = (value) => {
        setFilter(value);
        fetchData(value); // appel direct : plus explicite, évite un effet inutile
    };

    const fetchData = (value) => {
        console.log('Fetching data for filter:', value);
        setData([`Item A for ${value}`, `Item B for ${value}`]);
    };

    return (
        <View style={styles.container}>
            <Button title="Filtrer : fruits" onPress={() => handleFilter('fruits')} />
            <Text style={styles.title}>Résultats :</Text>
            {data.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        marginVertical: 10,
        fontWeight: 'bold',
    },
});