import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TaskProps {
    description: string;
}

export function Task({ description }: TaskProps) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.taskContent}>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={styles.checkbox}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.taskText}>
                    {description}
                </Text>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }} activeOpacity={0.5}>
                <Image style={styles.trashIcon} source={require('../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    checkbox: {
        marginRight: 15
    },
    taskText: {
        alignSelf: 'center',
        color: '#666666',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Inter'
    },
    trashIcon: {
        width: 24,
    }
})