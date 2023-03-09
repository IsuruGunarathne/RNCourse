import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    
    
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [...courseGoals, {text: enteredGoalText,id: Math.random().toString()}]) // 3 dots is the spread operator
    };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <GoalInput onAddGoal = {addGoalHandler}/>
      
      {/* we cant put the style directly on the ScrollView becasue it 
      doesn't have a style property. We need to wrap it in a 
      view and then apply the style to the view */}

      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}           
          renderItem={itemData => {
            return(
              <GoalItem text={itemData.item.text}/>
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

  goalsContainer: {
    flex: 4,
  },
});
