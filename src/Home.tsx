import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Task } from './components/Task';
import { useTask } from './Context/useTask';

export function Home() {
    const { tasks } = useTask();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <SearchBar />
                {tasks.length ? tasks.map(task => (
                    <Task key={task.id} description={task.description} />
                )) : null}
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
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 24
    }
})