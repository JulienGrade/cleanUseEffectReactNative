// Mauvaise pratique : initialisation de logique dans le corps du composant
// déclenche une alerte directement dans le corps du composant, ce qui la relance à chaque re-render.
import {Alert, View} from "react-native";

export function WrongInitialization() {
    // Exécute une alerte à chaque render (même si inutile)
    Alert.alert('Bienvenue !');

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