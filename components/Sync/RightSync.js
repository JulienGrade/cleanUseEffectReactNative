// Bonne pratique : appel API avec abort controller pour éviter les effets secondaires si le composant est démonté
// utilise AbortController dans le useEffect pour nettoyer correctement la requête en cas de démontage.
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator as LoadingSpinner, StyleSheet } from 'react-native';

export function RightSync() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    signal: controller.signal,
                });
                const json = await response.json();
                setData(json);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Erreur API :', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(r => console.log(r));

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <View style={styles.container}>
            {loading ? <LoadingSpinner /> : <Text>{data?.title}</Text>}
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
