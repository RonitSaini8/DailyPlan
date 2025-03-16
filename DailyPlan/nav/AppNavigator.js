import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import NotesScreen from '../screens/NotesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name = "Home"
                    component = {HomeScreen}
                />
                <Stack.Screen
                    name = "Add"
                    component = {AddTaskScreen}
                />
                <Stack.Screen 
                    name = "Edit"
                    component = {EditTaskScreen}
                />
                <Stack.Screen 
                    name = "Notes"
                    component = {NotesScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>  
    ) 
}
