import React from "react";
import { View, Text} from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bienvenue sur TrackAlert !</Text>
            <Button title="Signaler un incident" onPress={() => navigation.navigation('Report')} />
            {/* Ajout de la carte en temps réel */}
        </View>
    );
};

export default HomeScreen;