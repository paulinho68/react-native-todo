import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTask } from '../Context/useTask';

interface TaskProps {
    id: string;
    description: string;
    checked: boolean;
    hasBackground?: boolean;
}

function TaskContent({ checked, description, id }: TaskProps) {
    const [toggleCheckBox, setToggleCheckBox] = useState(checked);
    const { removeTask, editTask } = useTask();

    const handleRemoveTask = () => {
        removeTask(id);
    }
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={styles.checkbox}
                    tintColors={{ true: '#1db863', false: '#666666' }}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => {
                        editTask(newValue, id);
                        setToggleCheckBox(newValue)
                    }}
                />
                <Text
                    style={
                        [
                            styles.taskText,
                            {
                                color: toggleCheckBox ? '#1db863' : '#666666',
                                textDecorationLine: toggleCheckBox ? 'line-through' : 'none'
                            }
                        ]
                    }
                >
                    {description}
                </Text>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }} activeOpacity={0.5} onPress={handleRemoveTask}>
                <Image style={styles.trashIcon} source={require('../../assets/trash.png')} />
            </TouchableOpacity>
        </>
    )
}

export function Task({ id, checked, description, hasBackground }: TaskProps) {

    if (hasBackground) {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['rgba(196, 196, 196, 0.5)', '#EBEBEB']}
                style={styles.taskContent}
            >
                <TaskContent checked={checked} description={description} id={id} />
            </LinearGradient>
        )
    } else {
        return (
            <View style={styles.taskContent}>
                <TaskContent checked={checked} description={description} id={id} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 24
    },
    checkbox: {
        marginRight: 15,
    },
    taskText: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    trashIcon: {
        width: 24,
    }
})