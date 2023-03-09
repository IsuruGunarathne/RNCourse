import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
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