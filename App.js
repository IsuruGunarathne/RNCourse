import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...courseGoals, {text: enteredGoalText,id: Math.random().toString()}]) // 3 dots is the spread operator
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
      
      {/* we cant put the style directly on the ScrollView becasue it 
      doesn't have a style property. We need to wrap it in a 
      view and then apply the style to the view */}

      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}           
          renderItem={itemData => {
            return(
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}

          // this is a built in function that react native provides 
          // it generates a unique key for each item in the list
          
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}/>
          
        
      </View>

    </View>
  );
}

// this looks like css but it's not. It's a javascript object. Styles don't cascade in react native

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
  },

  goalText:{
    color: 'white',
  }
});
