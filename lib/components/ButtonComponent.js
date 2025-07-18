import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const ButtonComponent = ({ title, onPress }) => {
    return (<TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default ButtonComponent;
