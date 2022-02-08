import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useTask } from '../Context/useTask';

export function InsertTask() {
    const [task, setTask] = useState('');

    const { addTask } = useTask();

    const handleAddTask = () => {
        if (task) {
            addTask({
                description: task,
                id: String(new Date().getTime()),
                checked: false
            });
            setTask('');
        }
    };

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={setTask}
                placeholder="Adicione uma tarefa"
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.95} onPress={handleAddTask}>
                <Image style={styles.iconButton} source={require('../../assets/arrowRight.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: Dimensions.get('window').height * -0.04,
        marginBottom: 32,
        paddingHorizontal: 24
    },
    input: {
        width: '80%',
        height: 56,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: '#FFF',
        padding: 20,
        paddingRight: 5,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Inter'
    },
    button: {
        width: '20%',
        height: 56,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderStartColor: '#EBEBEB',
        borderStartWidth: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        height: 32,
        width: 32
    }
})