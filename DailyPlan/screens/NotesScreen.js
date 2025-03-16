// Sally

import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Notes Label at Mid-Top */}
      <Text style={styles.searchLabel}>Capture Your Thoughts Here</Text>

      {/* Search Bar & Add Note on the Same Level */}
      <View style={styles.rowContainer}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search..." 
          placeholderTextColor="#aaa" 
        />
      </View>

      {/* Add Note Section Slightly Below */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={input} 
          onChangeText={setInput} 
          placeholder="Add a note..." 
        />
        <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <AntDesign name="plus" size={24} color="yellow" />
        </TouchableOpacity>
      </View>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.note}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9f9f9', 
    padding: 20 
},
  
  // Mid-Top Position for Label
  searchLabel: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 50, 
    marginBottom: 10 
},

  // Search Bar on Same Level as Add Note
  rowContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
},

  searchBar: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 10, 
    marginRight: 10 
},

  // Add Note Section Slightly Behind (Lower)
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 15 
},

  input: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 10 
},

  addButton: { 
    backgroundColor: 'orange', 
    padding: 12, 
    borderRadius: 50, 
    marginLeft: 10 
},

  // Notes List Styling
  note: { 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 10, 
    marginTop: 10 
},
});

export default NotesScreen;
