import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...courseGoals, enteredGoalText]) // 3 dots is the spread operator
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your course goal!" 
          style={styles.textInput} 
          onChangeText={goalInputHandler} 
        />

        <Button title="Add Goal" onPress={addGoalHandler}/>

      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal} style={styles.goalItem}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },

  goalItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#5e0acc',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    color: 'white',
  }
});
