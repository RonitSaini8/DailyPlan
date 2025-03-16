import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState('');

  const handleSave = () => {
    console.log('Task edited:', task);
    navigation.goBack();
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Edit Task</Text>
      <TextInput
        style = {styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style = {styles.button} onPress={handleSave}>
        <Text style = {styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%'
  },
  button: {
    marginTop: 5,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  buttonText: {
    color: 'yellow',
    fontSize: 20
  }
});