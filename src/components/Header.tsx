
import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { useTask } from '../Context/useTask';

export function Header() {
    const { tasks } = useTask();

    return (
        <View style={styles.header}>
            <View style={styles.contentHeader}>
                <Image style={styles.logoImage} source={require('../../assets/todo.png')} />
                {tasks.length ? (
                    <Text style={styles.textHeader}>
                        {'Você tem '}
                        <Text style={{ fontWeight: '700' }}>
                            {tasks.length} {`tarefa${tasks.length === 1 ? '' : 's'}`}
                        </Text>
                    </Text>
                ) : (
                    <Text style={styles.textHeader}>Adicione uma tarefa</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        backgroundColor: "#8257E5",
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%'
    },
    logoImage: {
        width: 64,
        height: 24,
        resizeMode: 'contain',
    },
    textHeader: {
        fontFamily: "Inter",
        fontSize: 15
    }
})