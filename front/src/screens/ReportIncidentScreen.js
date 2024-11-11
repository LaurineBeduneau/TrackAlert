import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Button from "../components/Button";
import { reportIncident } from '../services/api';

const reportIncident = () => {
    const [description, setDescription] = useState('');

    const handleReport = async () => {
        try {
            awaitreportIncident({ description });
            Alert('Incident signalé avec succès !')
            setDescription('');
        } catch (error) {
            console.log(error);
            alert('Erreur lors du signalement de l\'incident.');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Description de l'incident"
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Envoyer" onPress={handleReport} />
        </View>
    );
}

export default reportIncident;