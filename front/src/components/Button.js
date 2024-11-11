import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress}) => {
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}> Premier Button</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor : '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignitems: 'center',
    },
    buttonText: {
        color: "#FFFFF",
        fontSize: 16,
    },
});

export default Button;