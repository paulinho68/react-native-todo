import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Image style={styles.logoImage} source={require('../assets/todo.png')} />
                    <Text style={styles.textHeader}>Você tem <Text style={{ fontWeight: '700' }}>3 tarefas</Text></Text>
                </View>
            </View>
            <View style={styles.content}>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
    },
    content: {
        flex: 4,
        backgroundColor: '#000'
    }
})