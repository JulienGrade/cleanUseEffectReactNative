// Bonne pratique : forcer le remount du composant pour réinitialiser son état proprement
// utilise la prop key pour forcer un remount du sous-composant ResettableForm, réinitialisant ainsi son state proprement.
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export function RightReset({ user }) {
    return <ResettableForm key={user.id} user={user} />;
}

function ResettableForm({ user }) {
    const [name, setName] = React.useState(user.name);

    return (
        <View style={styles.container}>
            <Text>Nom :</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
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