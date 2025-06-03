// Mauvaise pratique : déclenchement d'un effet via un useEffect dépendant d'un state modifié, alors que l'action pourrait être directe
// déclenchement indirect via useEffect après update de state.
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function WrongTriggerEffect() {
    const [filter, setFilter] = useState('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(filter); // ❌ déclenche indirectement un effet lors de la mise à jour du state
    }, [filter]);

    const fetchData = (value) => {
        console.log('Fetching data for filter:', value);
        setData([`Item A for ${value}`, `Item B for ${value}`]);
    };

    return (
        <View style={styles.container}>
            <Button title="Filtrer : fruits" onPress={() => setFilter('fruits')} />
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