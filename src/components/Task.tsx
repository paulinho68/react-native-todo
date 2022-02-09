import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTask } from '../Context/useTask';
import Icon from 'react-native-vector-icons/Feather';


interface TaskProps {
    id: string;
    description: string;
    checked: boolean;
    hasBackground?: boolean;
}

function TaskContent({ checked, description, id }: TaskProps) {
    const [toggleCheckbox, setToggleCheckbox] = useState(checked);
    const [toggleEdit, setToggleEdit] = useState(false);
    const [title, setTitle] = useState(description);

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
                    value={toggleCheckbox}
                    onValueChange={(newValue) => {
                        editTask(newValue, id);
                        setToggleCheckbox(newValue)
                    }}
                />
                {toggleEdit ? (
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        style={styles.inputText}
                    />
                ) : (

                    <Text
                        style={
                            [
                                styles.taskText,
                                {
                                    color: toggleCheckbox ? '#1db863' : '#666666',
                                    textDecorationLine: toggleCheckbox ? 'line-through' : 'none'
                                }
                            ]
                        }
                    >
                        {title !== description ? title : description}
                    </Text>
                )}
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 18 }} activeOpacity={0.5} onPress={() => {
                    if (!toggleEdit) {
                        editTask(toggleCheckbox, id, title);
                    }
                    setToggleEdit(!toggleEdit)
                }}
                >
                    {toggleEdit ? (
                        <Icon
                            name="check"
                            size={24}
                            color="#B2B2B2"
                        />
                    ) : (
                        <Icon
                            name="edit-3"
                            size={24}
                            color="#B2B2B2"
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center' }} activeOpacity={0.5} onPress={handleRemoveTask}>
                    <Icon
                        name="trash-2"
                        size={24}
                        color="#B2B2B2"
                    />
                </TouchableOpacity>
            </View>
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
    inputText: {
        height: 35,
        width: '68%',
        borderBottomWidth: 1,
        borderBottomColor: '#B2B2B2'
    }
})