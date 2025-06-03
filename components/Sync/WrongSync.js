// Mauvaise pratique : appel API mal géré avec useEffect (pas de nettoyage, pas d'annulation)
// appelle l’API sans AbortController, ce qui peut entraîner des erreurs si le composant est démonté avant la fin de la requête.
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator as Spinner, StyleSheet } from 'react-native';

export function WrongSync() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            {loading ? <Spinner /> : <Text>{data?.title}</Text>}
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