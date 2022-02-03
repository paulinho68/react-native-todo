import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <Text >Welcome</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 70,
        paddingHorizontal: 30,
    }
})