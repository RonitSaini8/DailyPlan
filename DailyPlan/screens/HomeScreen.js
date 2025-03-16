// Ronit

import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { useState } from "react";
import * as Progress from 'react-native-progress';

export default function HomeScreen ({ navigation }) {

    const tempTasks = [
        { id: '1', text: 'This file will be edited later' },
        { id: '2', text: 'When the redux files are created and implemented' },
    ];

    const [progress, setProgress] = useState(0);

    const handleProgressChange = (changeValue) => {
        const newValue = progress + changeValue

        if (newValue >= 0 && newValue <= 1) {
            setProgress(newValue)
        }
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity 
                style = {styles.add}
                onPress = {() => navigation.navigate('Add')}
            >
                <Text style = {styles.addText}>+</Text>
            </TouchableOpacity>
            
            <FlatList
            data = {tempTasks}
            renderItem = {({item}) => (
                <View style = {styles.task}>
                    <Text>{item.text}</Text>
                    <View style = {styles.progressContainer}>
                        <TouchableOpacity style = {styles.progressButtons} onPress = {() => handleProgressChange(-0.1)}>
                            <Text style = {styles.progressText}>-</Text>
                        </TouchableOpacity>
                         <Progress.Bar 
                                    width = {null}
                                    height = {30}
                                    progress = {progress}
                                    thickness = {5}
                                    color = 'lightgreen'
                                    unfilledColor = 'white'
                                    borderColor='black'
                                    borderRadius = {5}
                                    style = {styles.progressBar}
                                    />
                        <TouchableOpacity style = {styles.progressButtons} onPress = {() => handleProgressChange(0.1)}>
                            <Text style = {styles.progressText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button 
                            title = "Complete/Undo" // [task.status ? 'Undo' : 'Complete']
                        />
                        <Button
                            title = "Edit"
                            onPress = {() => navigation.navigate('Edit')}
                        />
                        <Button 
                            title = "Delete"
                        />
                    </View>
                </View>
            )}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity 
                style = {styles.add}
                onPress = {() => navigation.navigate('Notes')}
            >
                <Text style = {styles.addText}>Add Note</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,
        marginTop: -10
    },
    add: {
        marginTop: 16,
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    addText: {
        fontSize: 20,
        color: 'yellow'
    },
    task: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'gray'
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    progressButtons: {
        paddingLeft: 10,
        paddingRight: 10,
        margin: 2,
        borderRadius: 2,
        backgroundColor: 'orange'
    },
    progressText: {
        fontSize: 20,
        color: 'yellow'
    },
    progressBar: {
        flex: 1,
        marginHorizontal: 5,
        marginLeft: 15,
        marginRight: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});
