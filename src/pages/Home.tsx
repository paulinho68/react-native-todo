import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { Header } from '../components/Header';
import { InsertTask } from '../components/InsertTask';
import { Task } from '../components/Task';
import { useTask } from '../Context/useTask';

export function Home() {
    const { tasks } = useTask();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <InsertTask />
                <FlatList
                    data={tasks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <Task
                            key={item.id}
                            id={item.id}
                            checked={item.checked}
                            description={item.description}
                            hasBackground={index % 2 === 0}
                        />
                    )}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 4,
        backgroundColor: '#E5E5E5'
    }
})